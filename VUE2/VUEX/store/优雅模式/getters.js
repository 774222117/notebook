export default {
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
}