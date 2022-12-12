<template>
	<div id="app">
		<h2>-----------App内容：moudles中的内容-----------</h2>
		<h2>{{$store.state.a.name}}</h2>
		<button @click="updateName">修改名字</button>
		<h2>{{$store.getters.fullname}}</h2>
		<h2>{{$store.getters.fullname2}}</h2>
		<h2>{{$store.getters.fullname3}}</h2>
		<button @click="asyncUpdateName">异步修改名字</button>
		
		
		<h2>--------App内容-------</h2>
		<h2>{{$store.state.counter}}</h2>
		<button @click="addition">+</button>
		<button @click="subtraction">-</button>
		<button @click="addCount(5)">+5</button>
		<button @click="addCount(10)">+10</button>
		<button @click="addStudent">添加学生</button>
		
		<h2>--------App内容：getters相关信息-----------</h2>
		<h2>{{$store.getters.powerCounter}}</h2>
		<h2>{{$store.getters.more20stu}}</h2>
		<h2>{{$store.getters.more20stuLength}}</h2>
		<h2>{{$store.getters.moreAgeStu(12)}}</h2>
		
		
		<h2>------------App内容:info对象的内容是否是响应式----------</h2>
		<h2>{{$store.state.info}}</h2>
		<button @click="updateInfo">修改信息</button>
		
		
		
		<h2>------------Hello Vuex的内容----------------</h2>
		<hello-vuex :counter="counter"/>
	</div>
</template>

<script>
	import HelloVuex from './components/HelloVuex'
	import { INCREMENT } from './store/mutations-types'
	
	export default {
		name:'App',
		components:{
			HelloVuex
		},
		data(){
			return {
				message:'我是App组件',
				counter:0
			}
		},
		computed:{
			// 返回vuex中students数组中年龄大于20的对象
			// more20stu(){
			// 	return this.$store.state.students.filter(s => {
			// 		return s.age >= 20
			// 	})
			// }
		},
		methods:{
			addition(){
				this.$store.commit('increment')
				// 使用常量的方法
				// this.$store.commit(INCREMENT)
			},
			subtraction(){
				this.$store.commit('decrement')
			},
			addCount(count){
				// payload:负载     count就是payload
				// 1.普通的提交封装
				this.$store.commit('incrementCount',count)
				
				// 2.特殊的提交封装
				this.$store.commit({
					type:'incrementCount',
					count,
				})
			},
			addStudent(){
				const stu = {id:114,name:'allen',age:35}
				this.$store.commit('addStudents',stu)
			},
			updateInfo(){
				// this.$store.commit('updateInfo')
				// 调用actions中的函数使用dispatch
				this.$store.dispatch('aUpdateInfo','我是payload')
				
				// 高级用法
				// this.$store.dispatch('aUpdateInfo',{
				// 	message:'我是携带的信息',
				// 	success:() => {
				// 		console.log('里面已经完成了')
				// 	}
				// })
			}
			// 优雅模式
			updateInfo(){
				this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res => {
					console.log('里面完成了提交')
					console.log(res)
				})
			},
			updateName(){
				this.$store.commit('updateName','list')
			},
			asyncUpdateName(){
				this.#store.dispatch('aUpdateName')
			}
		}
	}
</script>

<style>
</style>