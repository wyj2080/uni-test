import Vue from 'vue'
import App from './App'
import store from '@/store'
import VueQr from 'vue-qr'
import {router,RouterMount} from '@/router/router.js'
import tools from '@/common/tools'



Vue.use(router)


Vue.config.productionTip = false

//统一提示方便全局修改
const msg = (title, duration=1500, mask=false, icon='none')=>{
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

Vue.prototype.$api = {msg};
Vue.prototype.$tools = tools;

App.mpType = 'app'

const app = new Vue({
	...App,
	store,
	VueQr
})
// #ifdef H5
	RouterMount(app, router,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif


