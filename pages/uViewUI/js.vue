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
		<view>还有jsonString/object/url</view>
		<u-divider>验证空("undefined"和"false"和"0"和空对象也算)</u-divider>
		<view>$u.test.empty(!'false')</view>
	</view>
</template>

<script>
	export default {
		created(){
			// this.$tools.msg('Hello uView!')
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
