const emptySale = {
    id: 1,
    articles: [],
    balance: 0,
    total: 0,
    update_stock: true,
    customer_id: null,
    article: {
        description: null,
        id: null,
        quantity: null,
        price: null
    },
    article_quantity: null,
    article_price: null
}

const state = {
    alerts: [],
    drawer: null,
    selectedOffice: null,
    sales: [Object.assign({}, emptySale)]
}
const getters = {}
const mutations = {
    addSale(store) {
        const id = (store.sales[store.sales.length - 1] && store.sales[store.sales.length - 1].id + 1) || 1;
        store.sales.push(Object.assign({}, { ...emptySale, id }));
    },
    deleteSale(store, id) {
        store.sales.splice(id, 1);

    },
    selectOffice(store, office) {
        store.selectedOffice = office;
    },
    showAlert(store, alert) {
        store.alerts.push({ ...alert, show: true });
    },
}
const actions = {}

export default {
    namespaced: true, state, getters, mutations, actions
}