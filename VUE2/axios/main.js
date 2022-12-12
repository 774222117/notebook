import Vue from 'vue'
import App from '/App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
	el:'#app',
	render:h => h(App)
})

axios({
	url:'http://123.207.32.32:8000/home/multidata',
	method:'post'
}).then(res = > {
	console.log(res)
})

axios({
	url:'http://123.207.32.32:8000/home/data',
	params:{
		type:'pop',
		page:1
	}
}).then(res => {
	console.log(res)
})
	

// 3.使用全局的axios和对应的配置进行网络请求
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

// 2.axios发送并发请求
axios.all([axios({
	baseURL:'http://123.207.32.32:8000',
	url:'/home/multidata'
}),axios({
	baseURL:'http://123.207.32.32:8000',
	url:'/home/data',
	params:{
		type:'sell',
		page:5
	}
})]).then(axios.spread((res1,res2) => {
	console.log(res1)
	console.log(res2)
}))


// 4.创建对应的axios的实例
const instance1 = axios.create({
	baseURL:'http://222.111.33.33:8000',
	timeout:5000
})

instance1({
	url:'/home/multidata'
}).then(res => {
	console.log(res)
})

instance1({
	url:'/home/data',
	params:{
		type:'pop',
		page:1
	}
}).then(res => {
	console.log(res)
})


const instance2 = axios.create({
	baseURL:'http://222.111.33.33:8000',
	timeout:10000,
	headers:{}
})


// 5.封装request模块
import {request} from './network/request';

// 最终方法(终极方案也可以用)
request({
	url:'/home/multidata'
}).then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})


// 第一种方法
request({
	url:'/home/multidata'
},res => {
	console.log(res)
},err => {
	console.log(err)
})


// 另一种方法
request({
	baseConfig:{
		
	},
	success:function(res){
		console.log(res)
	},
	failure:function(err){
		console.log(err)
	}
})