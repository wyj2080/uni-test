<template>
	<view>
		<u-divider>实用js this.$u.xxx()</u-divider>
		<u-button size="mini" @click='toast'>toast('msg')</u-button>
		<u-button size="mini" @click='os'>os</u-button>
		<u-button size="mini" @click='sys'>sys</u-button>
		<u-button size="mini" @click='deepClone'>deepClone</u-button>
		<view>Object.assign(a, b)有点单向</view>
		<view>对象合并用let c = this.$u.deepMerge(a, b)</view>
		<u-divider>时间戳格式化{{$u.timeFormat(1614004638, 'yyyy-mm-dd')}}</u-divider>
		<view>this.$u.timeFormat(this.timestamp, 'yyyy-mm-dd')</view>
		<u-divider>对象转get里的url值$u.queryParams(只适合1维)</u-divider>
		<view>{{$u.queryParams(this.a)}}</view>
		<u-divider>test 规则校验</u-divider>
		<view>$u.test.mobile('13888889999')返回true/false</view>
		<view>$u.test.email('13888889999')返回true/false</view>
		<view>$u.test.code('4567', 4)返回true/false</view>
		<view>$u.test.array([1, 2, 3])</view>
		<view>还有jsonString/object/url/number/digits(整数)</view>
		<view>idCard(身份证)/carNo(车牌号)/amount(金额)</view>
		<view>chinese(汉字)/letter(字母)/enOrNum(数字或字母字符串)</view>
		<view>contains('uView', 'View')/range(35, [30, 34])</view>
		<u-divider>验证空：$u.test.empty()。</u-divider>
		<view style="color: red;">和if的区别：0,'',null,undefined一致，{}会判断空，if判断有值</view>
		
	</view>
</template>

<script>
	export default {
		created(){
			// this.$tools.msg('Hello uView!')
			let a = {};
			if(a){
				console.log("aaa")
			}
		},
		data() {
			return {
				a:{
					info:{
						name:'aaa',
						age:'18'
					},
					address:'add'
				}
			};
		},
		methods:{
			toast(){
				this.$u.toast('msg', 1000);
			},
			os(){
				this.$u.toast(this.$u.os());
			},
			sys(){
				this.$u.toast(JSON.stringify(this.$u.sys()), 3000);
			},
			deepClone(){
				let b = this.$u.deepClone(this.a);
				this.a.address="b";
				this.$u.toast(JSON.stringify(b))
				this.a.address="a";
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
