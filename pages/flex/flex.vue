<template>
	<view>
		<view class="list">
			<view class="list-item">111</view>
			<view class="list-item">222</view>
			<view class="list-item">333</view>
			<view class="list-item">444</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	/* 
	教程：https://www.runoob.com/w3cnote/flex-grammar.html
	设为Flex布局以后，子元素的float、clear和vertical-align属性将失效
	flex-direction: row | row-reverse | column | column-reverse; 项目排列方向
	flex-wrap: nowrap | wrap | wrap-reverse; 如何换行
	flex-flow：是上面两个的简写，如flex-flow: row wrap;
	justify-content: flex-start | flex-end | center | space-between | space-around; 全部项目在主轴上的对齐方式(所有项目左对齐，右对齐，或者项目中间留空白)
	align-items: flex-start | flex-end | center | baseline | stretch; 项目之间的对齐方式
	align-content: flex-start | flex-end | center | space-between | space-around | stretch;多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
	*/
	.list{
		display: flex;
		flex-flow: row wrap;
		.list-item{
			width: 120rpx;
			border: 1px solid #000;
			flex-grow: 3;
		}
	}
	/*
	项目的属性
	order: <integer>; 默认0，项目的排列顺序
	flex-grow: <number>; 项目的放大比例，默认为0，即如果存在剩余空间，也不放大
	flex-shrink: <number>; 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小  shrink0的不缩小
	flex-basis: <length> | auto; 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
	flex：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
	*/

</style>
