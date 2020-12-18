// initial state
const state = () => ({
  userInfo: {}
})

// getters
const getters = {
	token: state => {return state.userInfo.token}
}

// actions
const actions = {
  login(context, params){
	  //后台login
	  let userInfo={
		  token:"64de",
		  name:'张三',
		  role:'店主'
	  }
	  context.commit('setUserInfo',userInfo);
  }
}

// mutations
const mutations = {
  setUserInfo(state, userInfo){
	  state.userInfo = userInfo;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}