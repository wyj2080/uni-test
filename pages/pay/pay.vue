<template>
	<view>
		<vue-qr :text="data.qr_code" logoSrc="/static/images/zfb.png" :size="200"></vue-qr>
	</view>
	
</template>

<script>
	import { getPay,test } from '@/api/pay.js'
	import vueQr from 'vue-qr'
	export default {
		components:{
			vueQr
		},
		data() {
			return {
				data:{
					qr_code:'',
					logo:'@/static/images/zfb.png'
				}
			}
		},
		onLoad(){
			this.loadPage();
		},
		methods: {
			loadPage(){
				this.getPay();
			},
			getPay(){
				let data = {
				}
				getPay(data).then(res=>{
					this.data = res.data;
					alert(JSON.stringify(this.data))
				}).catch(err => {
					this.data = err.data.alipay_trade_precreate_response;
				})
			},
			test(){
				let data = {
				}
				test(data).then(res=>{
					this.data = res.data;
				})
			}
		}
	}
</script>

<style>

</style>
