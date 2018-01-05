import {COMPUTECOUNT} from '../mutation-types.js'
const state = {
	count: 0
}

const getters = {
	getCounters: state => state.count
}

const actions = {
    addCounter:    ({ commit }) => commit('COMPUTECOUNT',{ type: 'add' }),
    reduceCounter: ({ commit }) => commit('COMPUTECOUNT',{ type: 'reduce' })
}

const mutations = {
	COMPUTECOUNT(state, payload){
		if(payload.type == 'add'){
			state.count++; 
		}
		if(payload.type == 'reduce'){
			if(state.count > 0 ){
				state.count--;
			}
		}
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}