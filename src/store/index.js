import Vue from 'vue'
import Vuex from 'vuex'

import storeKomoditas from 'Store/modules/storeKomoditas'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storeKomoditas
  }
})
