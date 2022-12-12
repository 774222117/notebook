import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './store/mutations-type.js' 

import mutations from './mutations'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA.js'

// 1.安装插件
Vue.use(Vuex)


// 2.创建对象
const state = {
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
}


const store = new Vuex.Store({
	state,
	mutations,
	// 异步操作都在actions中进行
	actions,
	getters,
	modules:{
		a:moduleA
	}
})

// 3.导出store对象
export default store