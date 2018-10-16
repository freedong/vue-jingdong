// 入口js文件

import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false


new Vue({
	el:"#app",
	router,
	components:{ App },
	template:"<App/>",
})