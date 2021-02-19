<template>
	<view>
		<u-dropdown>
			<u-dropdown-item :v-model="1" title="距离" :options="options1"></u-dropdown-item>
			<u-dropdown-item :v-model="2" title="温度" :options="options2"></u-dropdown-item>
		</u-dropdown>
		<view class="container">
			<u-divider>u-icon图标</u-divider>
			<u-icon name="zhifubao-circle-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="weixin-circle-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="woman" color="pink" size="40"></u-icon>
			<u-icon name="man" color="#2979ff" size="40"></u-icon>
			<u-icon name="lock" color="#2979ff" size="40"></u-icon>
			<u-icon name="lock-open" color="#2979ff" size="40"></u-icon>
			<u-icon name="star" color="#ff9900" size="40"></u-icon>
			<u-icon name="star-fill" color="#ff9900" size="40"></u-icon>
			<u-icon name="share" size="40"></u-icon>
			<u-icon name="question-circle" size="40"></u-icon>
			<u-icon name="question-circle-fill" size="40"></u-icon>
			<u-icon name="info-circle" size="40"></u-icon>
			<u-icon name="info-circle-fill" size="40"></u-icon>
			<u-icon name="plus-circle" color="#2979ff" size="40"></u-icon>
			<u-icon name="man-add" color="#2979ff" size="40"></u-icon>
			<u-icon name="eye" color="#2979ff" size="40"></u-icon>
			<u-icon name="eye-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="download" color="#2979ff" size="40"></u-icon>
			<u-icon name="close-circle" color="#2979ff" size="40"></u-icon>
			<u-icon name="setting-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="rmb-circle-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="email" color="#2979ff" size="40"></u-icon>
			<u-icon name="checkmark-circle-fill" color="#2979ff" size="40"></u-icon>
			<u-icon name="clock" color="#2979ff" size="40"></u-icon>
			<u-icon name="clock-fill" color="#2979ff" size="40"></u-icon>
			<u-divider>u-image</u-divider>
			<view class="u-flex">
				<u-image width="30%" height="200rpx" :lazy-load="true" :src="bg1"></u-image>
				<u-image width="30%" height="200rpx" :lazy-load="true" :src="bg2"></u-image>
			</view>
			<u-divider>u-button</u-divider>
			<view class="u-flex u-flex-wrap">
				<u-button size="mini" class="custom-style" >自定义样式</u-button>
				<u-button size="mini">默认按钮</u-button>
				<u-button size="mini" :disabled="true">disabled</u-button>
				<u-button size="mini" :throttle-time="500">throttle-time多ms点击算一次</u-button>
				<u-button size="mini" :loading="true">loading</u-button>
				<u-button size="mini" :ripple="true" plain type="primary">主要按钮plain镂空</u-button>
				<u-button size="mini"  type="success">成功按钮</u-button>
				<u-button size="mini" type="info">信息按钮</u-button>
				<u-button size="mini" type="warning">警告按钮</u-button>
				<u-button size="mini" type="error">危险按钮</u-button>
			</view>
			<u-divider>Layout 布局</u-divider>
			<u-row gutter="16">
				<u-col span="3">
					<view style="height: 30px;background-color: #333333;"></view>
				</u-col>
				<u-col span="4">
					<view style="height: 30px;background-color: #333333;"></view>
				</u-col>
				<u-col span="5">
					<view style="height: 30px;background-color: #333333;"></view>
				</u-col>
			</u-row>
			<u-divider>Cell单元格</u-divider>
			<u-cell-group title="设置喜好">
				<u-cell-item  title="夕阳无限好" arrow-direction="down">
					<u-icon slot="icon" size="32" name="search"></u-icon>
				</u-cell-item>
				<u-cell-item icon="setting-fill" title="只是近黄昏"></u-cell-item>
			</u-cell-group>
			<u-divider>Badge 徽标数</u-divider>
			<view style="width: 100px;height: 20px;background-color: #808080;" class="u-rela">
				<u-badge size="mini" type="error" :count="100" :is-center="true" :overflow-count="9"></u-badge>
			</view>
			<u-divider>Tag 标签</u-divider>
			<u-tag text="标签" type="success" />
			<u-tag text="可关闭" closeable :show="tagShow" @close="tagClick" />
			
			<u-divider>Form 表单</u-divider>
			<u-input v-model="value" :type="type" :border="true" />
			<u-form :model="form" ref="uForm">
				<u-form-item label="姓名" prop="name"><u-input v-model="form.name" /></u-form-item>
				<u-form-item label="手机" prop="mobile"><u-input v-model="form.mobile" /></u-form-item>
				<u-form-item label="开关"><u-switch slot="right" v-model="form.switchVal"></u-switch></u-form-item>
			</u-form>
			<u-button @click="submit">提交</u-button>
			
			<u-divider>Calendar 日历</u-divider>
			<u-calendar v-model="calendarShow" :mode="mode" @change="calendarChange"></u-calendar>
			<u-button @click="calendarShow = true">日期选择</u-button>
			
			<u-rate :count="rateCount" v-model="rateValue"></u-rate>
			<u-search placeholder="日照香炉生紫烟" v-model="search"></u-search>
			<u-number-box v-model="value"></u-number-box>
			<u-upload :action="action" :file-list="fileList" ></u-upload>
			
			<u-field v-model="mobile" label="手机号" placeholder="请填写手机号"></u-field>
			<u-field v-model="code" label="验证码" placeholder="请填写验证码" ></u-field>
			
			<u-circle-progress :duration="2500" active-color="#2979ff" :percent="percent">
				<view class="u-progress-content">
					<view class="u-progress-dot"></view>
					<text class='u-progress-info'>查找中</text>
				</view>
			</u-circle-progress>
			<u-count-down :timestamp="timestamp"></u-count-down>
			<view></view>
			假期余额：<u-count-to ref='countTo' :start-val="startVal" :end-val="endVal"></u-count-to>天
			<button size="mini" @click="addLife">续费假期</button>
			<u-popup v-model="popShow" mode="center">
				<view>
					人生若只如初见，何事秋风悲画扇
				</view>
			</u-popup>
			<button size="mini" @click="popShow = true">pop</button>
			<u-line />
			<u-divider>card</u-divider>
			<u-card margin="30rpx" :show-head="false">aaa
				<view class="" slot="body">
					aaa
				</view>
			</u-card>
			<u-mask :show="maskShow" @click="maskShow = false">
				<view style="width: 100px;height: 100px;background-color: #fff;border-radius: 20upx;"></view>
			</u-mask>
			<button size="mini" @click="maskShow = true">maskShow</button>
			<u-grid :col="3">
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
			</u-grid>
			<u-swiper :list="swiperList" :effect3d="true"></u-swiper>
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
			<u-back-top :scroll-top="scrollTop"></u-back-top>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bg1:'http://img.tadeyun.com:30800/images/2021/02/04/bg1.jpg',
				bg2:'http://img.tadeyun.com:30800/images/2021/02/04/bg2.jpg',
				tagShow: true,
				type: 'number',
				value: '',
				form:{
					switchVal: false
				},
				rules: {
					name: [
						{ 
							required: true, 
							message: '请输入姓名', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						}
					],
					// 字段名称
					mobile: [
						{
							required: true, 
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change','blur'],
						}
					]
				},
				calendarShow:false,
				//date/range
				mode: 'date',
				
				rateCount: 5,
				rateValue: 3,
				search:'',
				value: 6,
				action: '上传地址',
				fileList: [],
				mobile: '',
				code:"",
				percent: 100,
				timestamp: 60,
				startVal: 0,
				endVal: 0,
				popShow: false,
				maskShow: false,
				swiperList: [{
						image: 'http://img.tadeyun.com:30800/images/2021/02/04/bg1.jpg',
						title: 't1'
					},
					{
						image: 'http://img.tadeyun.com:30800/images/2021/02/04/bg2.jpg',
						title: 't2'
					},
					{
						image: 'http://img.tadeyun.com:30800/images/2021/02/04/bg3.jpg',
						title: 't3'
					}
				],
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
				scrollTop: 0,
							
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.percentAdd();
		},
		methods:{
			tagClick(){
				this.tagShow = false;
			},
			submit(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			calendarChange(e){
				console.log(e)
			},
			percentAdd(){
				let me = this;
				setTimeout(() => {
					console.log("st")
					if(me.percent >= 100){
						return;
					}
					me.percent += 0.5;
					me.percentAdd();
				},1)
			},
			addLife(){
				this.startVal = Number(this.$refs.countTo.displayValue);
				this.endVal += 100;
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	padding: 20upx;
}
.custom-style{
	color: #606266;
	width: 100rpx;
}
</style>
