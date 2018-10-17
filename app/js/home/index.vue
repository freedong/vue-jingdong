<template lang="html">
	<div>
		<!-- 顶部栏 -->
		<Heador/>
		<!-- 轮播 -->
		<Hslider/>
		<!-- 极速借贷 -->
		<Borrow/>
		<!--  -->
		<Money/>
		<!-- 生活服务 -->
		<Life/>
		<!-- 导航栏 -->
		<Navbar/>
		<!-- 底部栏 -->
		<Footer/>

	</div>
</template>

<script>
	import Heador from "../public/header.vue"
	import Navbar from "../public/navbar.vue"
	import Footer from "../public/footer.vue"
	import Hslider from "../home/hslider.vue"
	import Borrow from "../home/borrow.vue"
	import Life from "../home/life.vue"
	import Money from "../home/money.vue"
	export default {
		components:{
			Heador,
			Navbar,
			Footer,
			Hslider,
			Borrow,
			Life,
			Money,
		},
	}
</script>