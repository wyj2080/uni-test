<template>
	<view>
	<!-- 	<vue-qr :text="data.qrCode" logoSrc="/static/images/zfb.png" :size="200"></vue-qr>
		<button @tap="refund">退款</button> -->
	</view>
	
</template>

<script>
	import { createPay,refund } from '@/api/pay.js'
	// import vueQr from 'vue-qr'
	export default {
		components:{
			// vueQr
		},
		data() {
			return {
				data:{
					qrCode:'',
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
					this.data = res.data.data;
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
