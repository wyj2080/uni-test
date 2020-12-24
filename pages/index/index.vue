<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，可直接使用。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view>computed1:{{computed1}},computed2:{{computed2}}</view>
		<view style="display: flex;">
			<navigator url="/pages/vuex/vuex" hover-class="navigator-hover" class="right-10">
				<button type="primary" size="mini">vuex</button>
			</navigator>
			<navigator url="/pages/flex/flex" hover-class="navigator-hover" class="right-10">
				<button type="primary" size="mini">flex</button>
			</navigator>
			<navigator url="/pages/pay/pay" hover-class="navigator-hover" class="right-10">
				<button type="primary" size="mini">支付宝</button>
			</navigator>
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
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
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
