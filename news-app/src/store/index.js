import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)


const state = {
   header: true,
   footer: true
}


const mutations = {
  headerhide (state) {
    state.header = false;
  },

  footerhide (state) {
    state.footer = false;
  },

  showall (state) {
    state.header = true;
    state.footer = true;
  },
}


const actions = {

  increment (context) {

      axios.get('../data/article.data')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });

    }
}



export default new Vuex.Store({
  state,
  actions,
  mutations
})

