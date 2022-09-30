<template>
	<h2>我是用户界面</h2>
	<p>我是用户的相关信息，XXX</p>
	<h2>{{userId}}</h2>
	<h2>{{$route.params.id}}</h2>
</template>

<script>
	export default {
		name:"User",
		computed:{
			userId(){
				// 哪个路由处于活跃 $route就是指那个
				return this.$route.params.id
			}
		}
	}
</script>

<style>
</style>