export default {
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
}