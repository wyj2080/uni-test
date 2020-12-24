<template>
	<view>
		<view>{{data}}</view>
		
	</view>
	
</template>

<script>
	import { getPay } from '@/api/pay.js'
	export default {
		data() {
			return {
				data:{}
			}
		},
		onLoad(){
			this.loadPage();
		},
		methods: {
			//进入、回退自动调用
			loadPage(){
				this.getPay();
			},
			getPay(){
				let data = {
				}
				getPay(data).then(res=>{
					this.data = res.data;
				})
			},
		}
	}
</script>

<style>

</style>
