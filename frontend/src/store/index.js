import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './auth';
import app from './app';
import entities from './entities';

Vue.use(Vuex);
Vue.config.devtools = true;

const vuexLocal = new VuexPersistence({ modules: ['entities'] });
  
export default new Vuex.Store({
    modules: {
        auth, app, entities
    },
    plugins: [vuexLocal.plugin]
});
