export default {
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