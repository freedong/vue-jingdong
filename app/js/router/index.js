import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"//首页
import "../../css/reset.scss" //公用样式


Vue.use(Router)//使用路由

export default new Router({
	routes:[
	{
		path:"/",
		name:"Home",
		component:Home,
	},
	],
})