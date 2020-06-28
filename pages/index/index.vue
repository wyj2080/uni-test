<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，可直接使用。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<navigator url="/pages/navigator/navigator" hover-class="navigator-hover">
			<button type="default">页面跳转</button>
		</navigator>
		<!-- 自定义组件 -->
		<diy-unit :detail="obj" :list="list"></diy-unit>
	</view>
</template>

<script>
	import diyUnit from "./components/diyUnit.vue";
	export default {
		components:{
			diyUnit,
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				obj:{
					name:"aba",
					age:20,
				},
				list: [1,2,3],
			}
		},
		mounted: function(){
			alert(this.$store.state.count)
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
