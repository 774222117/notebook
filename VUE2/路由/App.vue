<template>
	<div id="app">
		<!-- tag=button 表示将router-link渲染成button样式 -->
		<!-- replace  取消网站返回和前进按钮 -->
		<!-- active-class="active" 修改默认的选中样式-->
		<!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
		<!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
		<router-link to="/home" tag="button" replace>首页</router-link>
		<router-link to="/about" tag="button" replace>关于</router-link>
		<router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
		<router-link :to="{path:'/profile',query:{name:'why',age:'18',height:1.88}}">档案</router-link>
		<!-- router-view绝对展示的位置 -->
		<router-view></router-view>
		
		
		<!-- 点击按钮跳转路由页面 -->
		<button @click="homeClick">首页</button>
		<button @click="aboutClick">关于</button>
		
		
		<button @click="userClick">用户</button>
		<button @click="profileClick">档案</button>
		
		<!-- 看生命周期过程 -->
		<!-- 排除profile,User的缓存，让其每次进入都重新create -->
		<keep-alive exclude="Profile,User">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name:'App',
		data(){
			return {
				userId:'zhangsan'
			}
		},
		methods:{
			// 通过代码的方式修改路由 vue-router
			homeClick(){
				// 两种方法都可以
				// this.$router.push('/home')
				this.$router.replace('/home')
			},
			aboutClick(){
				// this.$router.push('/about')
				this.$router.replace('/about')
			},
			userClick(){
				this.$router.push('/user' + this.userId)
			},
			profileClick(){
				this.$router.push({
					path:'/home/news',
					query:{
						name:'Kobe',
						age:18,
						height:1.88
					}
				})
			}
		},
		created(){
			
		},
		destroyed(){
			console.log('页面销毁时')
		},
		// 活跃的   这两个函数 只有该组件被保持了状态使用了keep-alive时，才是有效的
		activated(){
			this.$router.push(this.path)
		},
		// 不活跃的
		deactivated(){
			
		},
		beforeRouteLeave(to,from,next){
			this.path = this.$route.path
			next()
		}
		
	}
</script>

<style>
	@import "./assects/css/base.css"
	/* 被点击的样式改变 */
	.router-link-active {
		color:red
	}
	
	.active {
		color: red;
	}
</style>