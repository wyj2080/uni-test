<template>
	<view class="container">
		<u-divider>内置样式(class)</u-divider>
		<view class="u-line-1">
			字数过长自动点点点，u-line-1，字数过长自动点点点，u-line-1，字数过长自动点点点
		</view>
		<view class="u-relative u-font-20">
			相对定位(u-relative或u-rela)
			<view class="u-absolute" style="top: 0px;right: 0px;">绝对定位(u-absolute或u-abso)</view>
		</view>
		<view class="u-text-center" style="display: inline-block;width: 200px;border: 1px solid #000;">文字对齐(u-text-center)</view>
		<button class="u-reset-button" @tap="btnClick">重置按钮样式u-reset-button</button>
		<view class="u-p-20" style="border: 1px solid #000;">padding：u-p-20或u-padding-20，1-80之间：偶数或能被5整除</view>
		<view class="u-flex u-col-center u-row-between">
			<view class="u-font-20">u-font-20</view>
			<view class="u-font-24">u-font-24</view>
			<view class="u-font-28">u-font-28</view>
			<view class="u-font-32">u-font-32</view>
			<view class="u-font-36">u-font-36</view>
		</view>
		<view class="u-flex u-flex-wrap">
			<view>u-flex超类</view>
			<view>u-flex-wrap换行</view>
			<view>元素之间对齐u-col-top/center/bottom(align-items:flex-start)</view>
			<view>元素轴上位置u-row-left/center/right/between/around(justify-content: flex-start)</view>
		</view>
		<view class="u-flex">
			<view class="u-flex-9" style="border: 1px solid #000;">u-flex-9</view>
			<view class="u-flex-3" style="border: 1px solid #000;">u-flex-3</view>
		</view>
		<view class="u-flex u-row-between">
			<view class="u-main-color">u-main-color</view>
			<view class="u-content-color">u-content-color</view>
			<view class="u-tips-color">u-tips-color</view>
			<view class="u-light-color">u-light-color</view>
		</view>
		<view class="u-flex u-row-between">
			<view class="u-type-primary">u-type-primary</view>
			<view class="u-type-warning">warning</view>
			<view class="u-type-success">success</view>
			<view class="u-type-error">error</view>
			<view class="u-type-info">info</view>
		</view>
		<view>uni.getSystemInfoSync()获取系统信息，高度等</view>
		<view class="deep">
			<item>::v-deep 改其他组件属性</item>
		</view>
		<button class="u-reset-button">重置按钮样式</button>
		<u-modal v-model="show" content="点击确定进行授权">
			<button open-type="getUserInfo" class="u-reset-button" slot="confirm-button" @getuserinfo="getuserinfo">确定</button>
		</u-modal>
		<u-button @click="show = true">打开modal</u-button>
		
		<u-time-line>
			<u-time-line-item>
				<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
				<template v-slot:content>
					<view>
						<view class="u-order-desc">【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。</view>
						<view class="u-order-time">2019-12-06 22:30</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		onLoad(){
		},
		methods: {
			getuserinfo(res) {
				console.log(res);
			},
			btnClick(){
				alert('这是按钮')
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
::v-deep item{
	border: 1px solid blue;
}
.u-node {
	width: 44rpx;
	height: 44rpx;
	border-radius: 100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #d0d0d0;
}

.u-order-title {
	color: #333333;
	font-weight: bold;
	font-size: 32rpx;
}

.u-order-desc {
	color: rgb(150, 150, 150);
	font-size: 28rpx;
	margin-bottom: 6rpx;
}

.u-order-time {
	color: rgb(200, 200, 200);
	font-size: 26rpx;
}
</style>
