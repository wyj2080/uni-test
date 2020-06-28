<template>
	<!-- 自定义组件，并从父组件传过来参数 -->
	<view>
		<view>
			自定义组件[[
			<text>姓名{{detail.name}}</text>
			<text>年龄{{detail.age}}</text>
			]]
		</view>
		
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
			//detail和list可以自定义
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
