import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter/counter'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		counter
	}
})