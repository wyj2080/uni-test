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
	import { mapMutations, mapActions } from 'vuex'
	export default {
		data() {
			return {
			
			}
		},
		computed: {
			//多个参数的state,放在computed里
			...mapState({
				aa: state => state.count, //aa相当于this.$store.state.count
				bb: state => state.name,
			}),
		},
		methods: {
			//多个方法,放在methods
			...mapMutations({
				setUser:'SET_USER',
				dd:'add'
			}),
			...mapActions({
				ac_add:'ac_add',
				async_add: 'async_add'
			}),
			add: function(){
				this.setUser(999);
				this.async_add(25).then(()=>{alert("123")});
				alert(this.aa)
			}
		}
	}
</script>

<style>

</style>
