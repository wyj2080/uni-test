import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import {SET_USER} from "./mutations.js"

const store = new Vuex.Store({
  state: {
    count: 10,
	name: "wo shi shei",
	user: null,
  },
  //相当于computed
  getters:{
	  gname: state => {return state.name+" getter"},
	  gcount: state => (param) => {return state.count + param}
  },
  mutations: {
    add (state, n) {
      state.count+=n;
    },
	[SET_USER] (state, obj) {
		state.user = obj;
		console.log(obj);
	}
  },
  actions: {
	  ac_add({commit}, obj) {
		 commit("add", obj);
	  },
	  //异步操作
	  async_add({commit}, obj) {
		  return new Promise((resolve, reject) => {
		        setTimeout(() => {
		          commit('add',obj)
		          resolve()
		        }, 1000)
		      });
	  },
	  async actionB ({ dispatch, commit }) {
	      await dispatch('actionA') // 等待 actionA 完成，getOtherData返回Promise
	      commit('gotOtherData', await getOtherData())
	    }
	  
  }
})
//上面的store暴露出去
export default store;