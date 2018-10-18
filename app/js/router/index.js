import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"//首页
import Ious from "../ious/index.vue"//白条
import Money from "../money/index.vue"//理财

import "../../css/reset.scss" //公用样式


Vue.use(Router)//使用路由

export default new Router({
	// mode: 'history',
	routes:[
	{
		path:"/",
		name:"home",
		component:Home,
	},
	{
		path:"/money",
		name:"money",
		component:Money,
	},
	{
		path:"/ious",
		name:"ious",
		component:Ious,
	}
	],
})