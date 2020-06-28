<template>
	<!-- 自定义组件，并从父组件传过来参数 -->
	<view>
		<view>自定义组件</view>
		<view>姓名{{detail.name}}</view>
		<text>年龄{{detail.age}}</text>
		<view>
			数组
			<block v-for="item in list">{{item}}</block>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		props: {
			detail: {
				type: Object,
				default: null,
			},
			list: {
				type: Array,
				default: function(){
					return [];
				} ,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
