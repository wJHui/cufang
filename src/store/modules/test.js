const state = {
	test : 'wujiahui',
	s : '这是state的s属性'
}

const getters = {
	g : (state, getters, rootGetters, rootState) => {
		return state.test + getters.b
	},
	b : (state, getters, rootGetters, rootState) => {
		return '这是getters的b属性'
	}
}

const mutations = {
	action : (state, getters) => {
		state.test = '吴嘉辉'
	},
	a : (state) => {
		console.log('这是mutations触发的')
	}
}

const actions = {
	aa ({state, getters,dispatch, commit, rootState, rootGetters}){
		console.log(state.s)
		console.log(getters.g)
		commit('a')
		dispatch('bb')
	},
	bb (){
		console.log('这是actions的bb方法')
	}
}

module.exports = {
	namespaced : true,
	state,
	mutations,
	getters,
	actions
}