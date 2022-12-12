import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './store/mutations.js' 

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
	state:{
		name:'zhangsan'
	},
	mutations:{
		updateName(state,payload){
			state.name = payload
		}
	},
	getters:{
		fullname(state){
			return state.name + '111111'
		},
		fullname2(state,getters){
			return getters.fullname2 + '2222'
		},
		// rootState参数只在模块中才有 指根state上的参数
		fullname3(state,getters,rootState){
			return getters.fullname2 + rootState.counter
		}
	},
	actions:{
		aUpdataName(context){
			setTimeout(() => {
				context.commit('updateName','wangwu')
			},1000)
		}
	}
}

// 2.创建对象
const store = new Vuex.Store({
	state:{
		counter:1000,
		students:[
			{id:110,name:'why',age:18},
			{id:111,name:'kobe',age:24},
			{id:112,name:'james',age:30},
			{id:113,name:'curry',age:10},
		],
		info:{
			name:'Kobe',
			height:1.98,
			age:40
		}
	},
	mutations:{
		// 方法
		// [INCREMENT](state){
		// 	state.counter++
		// },
		increment(state){
			state.counter++
		},
		decrement(state){
			state.counter--
		},
		incrementCount(state,payload){
			state.counter += payload.count
		},
		addStudents(state,stu){
			state.students.push(stu)
		},
		updateInfo(state){
			state.info.name = 'coderwhy'
			// 向state里面的参数添加key
			Vue.set(state.info,'address','洛杉矶')
			
			// 删除state里面参数的key
			Vue.delete(state.info,'age')
		}
	},
	// 异步操作都在actions中进行
	actions:{
		// context:上下文
		aUpdateInfo(context,payload){
			setTimeout(() => {
				context.commit('updateInfo')
				console.log(payload)
			},1000)
			
			
			// 高级用法
			setTimeout(() => {
				context.commit('updateInfo')
				console.log(payload.message)
				payload.success()
			},1000)
		}
		// 优雅模式
		aUpdateInfo(context,payload){
			return new Promise((resolve,reject) => {
				setTimeout(() => {
					context.commit('updateInfo')
					console.log(payload)
					resolve('canshu')
				},1000)
			})
		}
	},
	getters:{
		powerCounter(state){
			return state.counter * state.counter
		},
		// 返回vuex中students数组中年龄大于20的对象
		more20stu(state){
			return state.students.filter(s => {
				return s.age >= 20
			})
		},
		more20stuLength(state,getters){
			return getters.more20stu.length
		},
		// 返回传入指定参数的年龄的对象
		moreAgeStu(state){
			// return function(age){
			// 	return state.students.filter(s => s.age >= age)
			// }
			return age => { return state.students.filter(s => s.age > age)}
		}
	},
	modules:{
		a:moduleA
	}
})

// 3.导出store对象
export default store