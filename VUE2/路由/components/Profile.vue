<template>
	<div>
		<h2>我是profile组件</h2>
		<!-- 取域名信息 -->
		<h2>{{$route.query.name}}</h2>
		<h2>{{$route.query.age}}</h2>
		<h2>{{$route.query.height}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Profile'
	}
</script>

<style>
</style> 