<template>
	<div id="app">
		<tab-bar>
			<!-- activeColor是传的值 -->
			<tab-bar-item path="/home" activeColor="pink">
				<img slot="item-icon" src="./assects/img/tabbar/home.svg" alt="">
				<img slot="item-icon-active" src="./assects/img/tabbar/home_active.svg" alt="">
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category">
				<img slot="item-icon" src="./assects/img/tabbar/category.svg" alt="">
				<img slot="item-icon-active" src="./assects/img/tabbar/category_active.svg" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart">
				<img slot="item-icon" src="./assects/img/tabbar/shopcart.svg" alt="">
				<img slot="item-icon-active" src="./assects/img/tabbar/shopcart-active.svg" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="profile">
				<img slot="item-icon" src="./assects/img/tabbar/profile.svg" alt="">
				<img slot="item-icon-active" src="./assects/img/tabbar/profile-active.svg" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
		<router-view></router-view>
	</div>
</template>

<script>
	import Tabbar from './components/tabbar/TabBar'
	import TabBarItem from './components/tabbar/TabBarItem'
	
	export default {
		name:'App',
		components:{
			Tabbar,
			TabBarItem
		}
	}
</script>

<style>
	@import "./assets/css/base.css";
</style>