<template>
	<div class="tab-bar-item" @click="itemClick">
		<!-- 用div包起来，插槽放中间 -->
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle "><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			// 传进来的path
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
				isActive:false
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color:this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				// 如果需要返回使用push，不需要则使用replace
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 24px;
	}
	
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
		margin-bottom: 3px;
	}
	
	
</style>