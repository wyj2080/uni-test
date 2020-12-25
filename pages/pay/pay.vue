<template>
	<view>
		<view>{{data}}</view>
		
	</view>
	
</template>

<script>
	import { getPay,test } from '@/api/pay.js'
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
			loadPage(){
				this.test();
			},
			getPay(){
				let data = {
				}
				getPay(data).then(res=>{
					this.data = res.data;
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
