import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"//首页
import Ious from "../ious/index.vue"//白条
import Money from "../money/index.vue"//理财
import Raise from "../raise/index.vue"//众筹
import Download from "../special/download.vue"//活动下载页面

import "../../css/reset.scss" //公用样式


Vue.use(Router)//使用路由



const scrollBehavior = (to,from,savedPosition) => {
	if(savedPosition){
		return savedPosition
	}else{
		return {x:0,y:0}
	}
}



export default new Router({
	mode:'history',//去除url地址链接中的#
	scrollBehavior,//切换组件  回到顶部
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
	},
	{
		path:"/raise",
		name:"raise",
		component:Raise,
	},
	{
		path:"/special/download",
		name:"download",
		component:Download,
	}
	],
});
