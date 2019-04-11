import Vue from "vue";
import { isEqual } from 'lodash';
import { fetch, getDataFromKey } from '../utils';
import { getStoredEntities } from '../utils/entities';

const state = {
    colors: [],
    customers: [],
    designs: [],
    fabrics: [],
    notifications: [],
    offices: [],
    products: [],
    purchases: [],
    stock_movements: [],
    stocks: [],
    suppliers: [],
    users: []
}
const getters = {
    getItems: store => ({ entity, params = { office: null } }) => {
        let items = store[entity];
        if (params.office && entity === 'stocks') {
            items = items.filter(item => (
                isEqual(item.office_id, params.office.id)
                || parseInt(item.office_id, 10) === parseInt(params.office.id, 10)));
        }
        return items;
    },
    getSearchableItems: store => ({ entity, keys = ['name'] }) => store[entity].map((item) => {
        let text = '';
        keys.forEach((key) => {
            text += `${getDataFromKey(item, key.split('.')) ? `${getDataFromKey(item, key.split('.'))} ` : ''}`;
        });
        return { text, value: item.id };
    }),
    getStockDetails: store => ({ office, product, quantity, selected }) => {
        const stocks = [];
        store.stocks.filter(item => item.office_id === office).forEach(item => {
            if (product !== undefined && product !== null) {
                if (item.product_id !== product) return;
            }
            item.details.forEach(detail => {
                if (selected && selected.indexOf(detail.id) !== -1) return;
                if (quantity) {
                    if (parseFloat(detail.quantity) < parseFloat(quantity) - 5 || parseFloat(detail.quantity) > parseFloat(quantity) + 5) return
                }
                stocks.push({
                    ...detail,
                    design: item.design.name,
                    color: item.color.name,
                    product: `${item.product.sku} ${item.fabric.name}${item.design.name ? ' ' + item.design.name : ''}${item.color.name ? ' ' + item.color.name : ''}`,
                    fabric: item.fabric.name,
                })
            })
        })
        return stocks;
    }
}
const actions = {
    async setNotifications({ state, commit }, notifications) {
        const improvePerformance = {};
        notifications.forEach(item => {
            if (!improvePerformance[item.entity_id]) {
                improvePerformance[item.entity_id] = [];
            }
            improvePerformance[item.entity_id].push(item);
        });
        notifications = [];
        Object.keys(improvePerformance).forEach(item => {
            if (improvePerformance[item].length > 2) {
                notifications.push({ ...improvePerformance[item][0], type: 2 });
            } else {
                notifications = notifications.concat(improvePerformance[item]);
            }
        })
        notifications.forEach(async item => {
            if (item.type == 1) {
                const [err, createdValue] = await fetch({
                    url: `/api/${item.entity.name}/${item.entity_value_id}`,
                });
                if (!err) {
                    const findIndex = state[item.entity.name].find(item => item.id == createdValue.id);
                    if(findIndex === -1){
                        commit('onCreate', { entity: item.entity.name, createdValue });
                    }
                }
            } else if (item.type == 2) {
                const [err, items] = await fetch({ url: `/api/${item.entity.name}`, });
                if (!err) {
                    commit('setInitialValues', { [item.entity.name]: items });
                }
            } else if (item.type == 3) {
                const [err, updatedValue] = await fetch({
                    url: `/api/${item.entity.name}/${item.entity_value_id}`,
                });
                if (!err) {
                    commit('onUpdate', { entity: item.entity.name, id: item.entity_value_id, updatedValue });
                }
            } else if (item.type == 4) {
                commit('onDelete', { entity: item.entity.name, id: item.entity_value_id });
            }
        });
    },
    async read({ commit }, { entity }) {
        const [err, res] = await fetch({ url: `/api/${entity}` });
        if (!err) {
            commit('read', { items: res, entity });
        }
    },
    async create(store, { item, entity, noUpdate }) {
        const [err, res] = await fetch({ url: `/api/${entity}`, data: item, method: 'post' });
        if (!err && !noUpdate) {
            if (res.exists) {
                const updatedItem = store.state[entity].findIndex(({ id }) => (
                    isEqual(id, res.data.id) || parseInt(id, 10) === parseInt(res.data.id, 10)));
                store.commit('update', { item: res.data, entity, updatedItem });
            } else store.commit('create', { item: res.data, entity });
        }
        return [err, res];
    },
    async update({ commit }, { item, entity, updatedItem }) {
        const [err, res] = await fetch({ url: `/api/${entity}/${item.id}`, data: item, method: 'put' });
        if (!err) {
            commit('update', { item: res.data, entity, updatedItem });
        }
        return [err, res];
    },
    async delete({ commit }, {
        item, entity, deletedItem, noDelete,
    }) {
        const [err, res] = await fetch({ url: `/api/${entity}/${item.id}`, method: 'delete' });
        if (!err && !noDelete) {
            commit('delete', { item: deletedItem, entity });
        }
        return [err, res];
    },
};

const mutations = {
    setInitialValues(state, { ...entities }) {
        Object.keys(entities).forEach(entity => state[entity] = entities[entity]);
    },
    onCreate(state, { entity, createdValue }) {
        state[entity].push(createdValue);
    },
    onUpdate(state, { entity, id, updatedValue }) {
        const index = state[entity].findIndex((item) => item.id == id);
        if (index > -1) {
            Vue.set(state[entity], index, updatedValue)
        } else {
            state[entity].push(updatedValue);
        }
    },
    onDelete(state, { entity, id }) {
        const index = state[entity].findIndex((item) => item.id == id);
        if (index > -1) {
            state[entity].splice(index, 1);
        }
    },
    read(store, { items, entity }) {
      store[entity] = items;
    },
    create(store, { item, entity }) {
      store[entity].push(item);
    },
    update(store, { item, entity, updatedItem }) {
      Object.assign(store[entity][updatedItem], item);
    },
    delete(store, { item, entity }) {
      store[entity].splice(item, 1);
    },
    reset(store) {
        Object.assign(store, {
            colors: [],
            customers: [],
            designs: [],
            fabrics: [],
            notifications: [],
            offices: [],
            products: [],
            purchases: [],
            stock_movements: [],
            stocks: [],
            suppliers: [],
            users: []
        });
    },
};
export default {
    namespaced: true, state, getters, mutations, actions
}