<template>
	<view class="container">
		<view class="intro">本项目用于学习uni-app。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view>computed1:{{computed1}},computed2:{{computed2}}</view>
		<view style="display: flex;flex-direction: row;justify-content: space-between;">
			<view><button type="primary" size="mini" @tap="navTo('/pages/vuex/vuex')">vuex</button></view>
			<view><button type="primary" size="mini" @tap="navTo('/pages/flex/flex')">flex</button></view>
			<view><button type="primary" size="mini" @tap="navTo('/pages/pay/pay')">支付宝</button></view>
			<view><button type="primary" size="mini" @tap="navTo('/pages/router/router',{name:'123','p':100,a:[{cc:'啊啊'}]})">路由</button></view>
			<view><button type="primary" size="mini" @tap="navTo('/pages/mixins/mixins')">mixins</button></view>
		</view>
		<view style="display: flex;flex-direction: row;justify-content: space-between;">
			<view><button type="primary" size="mini" @tap="navTo('/pages/uViewUI/class')">uViewUI内置样式</button></view>
			<view><button type="primary" size="mini" @tap="navTo('/pages/uViewUI/components')">uViewUI组件</button></view>
		</view>
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
				href: 'http://vip.tadeyun.com',
				obj:{
					name:"aba",
					age:20,
				},
				list: [1,2,3],
				computed1: 5,
				
			}
		},
		mounted: function(){
		},
		//计算属性
		computed: {
			//computed2随着1的变化而变化
			computed2: function(){
				return this.computed1+1;
			},
		},
		methods: {
			navTo(path,query){
				this.$tools.routerTo(path,query);
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.right-10{
		margin-right: 10rpx;
	}
</style>
