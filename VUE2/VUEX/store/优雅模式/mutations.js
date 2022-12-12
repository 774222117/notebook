import { INCREMENT } from "./mutations-types.js"

export default {
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
}