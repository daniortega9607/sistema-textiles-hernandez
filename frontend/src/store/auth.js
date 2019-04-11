const state = {
    token: localStorage.getItem('token') || null,
    authenticated: localStorage.getItem('authenticated') || false,
    user: localStorage.getItem('user') && JSON.parse(localStorage.user) || null
}
const getters = {}
const mutations = {
    login(store, { token, user }) {
        store.token = token;
        store.user = user;
        store.authenticated = true;
    },
    logout: (store) => {
      store.authenticated = false;
      store.token = null;
      store.user = null;
    },
}
const actions = {}

export default {
    namespaced: true, state, getters, mutations, actions
}