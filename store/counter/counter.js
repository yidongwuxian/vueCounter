import {COMPUTECOUNTADD,COMPUTECOUNTREDUCE} from '../mutation-types.js'

const state = {
	count: 0
}

const getters = {
	getCounters: state => state.count
}

const actions = {
    addCounter:    ({ commit }) => commit('COMPUTECOUNTADD'),
    reduceCounter: ({ commit }) => commit('COMPUTECOUNTREDUCE')
}

const mutations = {
	COMPUTECOUNTADD(state){
		state.count++; 
	},
	COMPUTECOUNTREDUCE(state){
		if(state.count > 0 ){
			state.count--;
		}
	}	
}

export default {
  state,
  getters,
  actions,
  mutations
}