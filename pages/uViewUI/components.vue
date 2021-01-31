<template>
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
			<u-image width="30%" height="200rpx" :lazy-load="true" :src="src"></u-image>
			<u-image width="30%" height="200rpx" :lazy-load="true" src="e"></u-image>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'http://tadeyun.com:9000/images/bg.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20210131%2F%2Fs3%2Faws4_request&X-Amz-Date=20210131T061314Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b1effed8c4b9369bb7ea01d2ddb980635ee4c2ace4f9a4fba01945c309d227f6',
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
				fileList: [
					{
						url: '本地选择的图片',
					}
				],
				mobile: '',
				code:"",
			};
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
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
