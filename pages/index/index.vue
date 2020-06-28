<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<navigator url="/pages/index/test" hover-class="navigator-hover">
			<button type="default">跳转到新页面</button>
		</navigator>
		<diyUnit :detail="obj" :list="list"></diyUnit>
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
