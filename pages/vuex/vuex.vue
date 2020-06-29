<template>
	<view>
		<view>count:{{aa}},name:{{bb}}</view>
		<view>getters:{{this.$store.getters.gname}}</view>
		<view>getters:传参数{{this.$store.getters.gcount(21)}}</view>
		<button type="primary" size="mini" @tap="add">store add</button>
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
				aa: state => state.count,
				bb: state => state.name,
			}),
		},
		methods: {
			add: function(){
				this.$store.commit("add",10);
				alert(this.aa)
			}
		}
	}
</script>

<style>

</style>
