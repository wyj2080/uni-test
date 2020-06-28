import Vue from 'vue'
import App from './App'
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
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()


