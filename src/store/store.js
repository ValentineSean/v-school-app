import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

// STORE MODULES
// import auth from './modules/auth/auth';
// import dashboard from './modules/dashboard/dashboard';


Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

const store = new Vuex.Store({
  modules: {
    // auth,
    // dashboard,
  },

  plugins: [vuexLocal.plugin],
});

export default store;
