import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import locationModule from './location.js'


export default new Vuex.Store({
	modules:{
		location: locationModule
	}
})
