<template>
	<view>
		mixins，相当于是组件合并<br>
		date，methods里相同的会被"主页面"顶掉。<br>
		onLoad等共存，mixins里先执行
	</view>
</template>

<script>
	import mx from '@/mixins/index.js'
	export default {
		mixins:[mx],
		data() {
			return {
				aa:"22",
			}
		},
		onLoad(){
			console.log("主load")
		},
		onShow(){
			console.log("主show")
		},
		methods: {
			a(){
				console.log("主fun")
			}
		}
	}
</script>

<style>

</style>
