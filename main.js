import Vue from 'vue'
import App from './App'
import store from '@/store'
import VueQr from 'vue-qr'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store,
	VueQr
})
app.$mount()


