import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [
      {
        descr: 'img-1'
      },
      {
        descr: 'img-2'
      },
      {
        descr: 'img-3'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
