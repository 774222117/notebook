import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/Category/Category')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/Profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
	{
		path:'',
		redirect:"/home"
	},
	{
		path:'/home',
		components:Home
	},
	{
		path:'/category',
		components:Category
	},
	{
		path:'/cart',
		components:Cart
	},
	{
		path:'/profile',
		components:Profile
	}
]


const router = new VueRouter({
	routes
})

// 3.导出
export default router