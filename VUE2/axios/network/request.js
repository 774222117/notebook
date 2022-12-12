import axios from 'axios'

// 终极方案
export function request(config){
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	
	// 2.axios的拦截器
	instance.interceptors.request.use(config => {
		console.log(config);
		// 1.比如config中的一些信息不符合服务器的要求
		
		// 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
		
		// 3.某些网络请求（比如登录(token)），必须携带一些特殊的信息
		return config
	}.err => {
		console.log(err);
	})
	
	// 2.2相应拦截
	instance.interceptors.response.user(res => {
		// console.log(res)
		return res
	},err => {
		console.log(err)
	})
	
	
	// 发送真正的网络请求
	return instance(config)	
}



// 最终方案
export function request(config){
	return new Promise((resolve,reject()) => {
		// 1.创建axios的实例
		const instance = axios.create({
			baseURL:'http://123.207.32.32:8000',
			timeout:5000
		})
		
		// 发送真正的网络请求
		instance(config)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}


// 第一种方法
export function request(config,success,failure){
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	
	// 发送真正的网络请求
	instance(config)
		.then(res => {
			// console.log(res);
			success(res)
		})
		.catch(err => {
			// console.log(err);
			failure(err)
		})
}

// 另一种方法  main.js页面引用
export function request(config){
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	
	// 发送真正的网络请求
	instance(config.baseConfig)
		.then(res => {
			// console.log(res);
			config.success(res)
		})
		.catch(err => {
			// console.log(err);
			config.failure(err)
		})
}