<template>
	<view>
		<view>count:{{count}},name:{{name}}</view>
		<view>getters:{{this.$store.getters.gname}}</view>
		<view>getters:传参数{{this.$store.getters.gcount(21)}}</view>
	</view>
	
</template>

<script>
	import {mapState} from "vuex";
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			//多个参数的state
			...mapState({
				count: state => state.count,
				name: state => state.name,
			}),
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
