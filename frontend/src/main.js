import Vue from 'vue';
import './plugins/vuetify'
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.config.devtools = true;

const RouterView = () => <router-view />

new Vue({
  router,
  store,
  render: h => h(RouterView),
}).$mount('#app');
