import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10,
	name: "wo shi shei"
  },
  //相当于computed
  getters:{
	  gname: state => {return state.name+" getter"},
	  gcount: state => (param) => {return state.count + param}
  },
  mutations: {
    add (state, n) {
      state.count+=n;
    }
  }
})
//上面的store暴露出去
export default store;