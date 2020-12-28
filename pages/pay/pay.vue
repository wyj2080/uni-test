<template>
	<view>
		<vue-qr :text="data.qr_code" logoSrc="/static/images/zfb.png" :size="200"></vue-qr>
		<button @tap="refund">退款</button>
	</view>
	
</template>

<script>
	import { createPay,refund } from '@/api/pay.js'
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
				this.createPay();
			},
			createPay(){
				let data = {
				}
				createPay(data).then(res=>{
					this.data = res.data.data.alipay_trade_precreate_response;
					alert(JSON.stringify(this.data))
				})
			},
			refund(){
				let data = {
				}
				refund(data).then(res=>{
					alert(JSON.stringify(res.data))
				})
			}
		}
	}
</script>

<style>

</style>
