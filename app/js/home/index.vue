<template lang="html">
	<div>
		<!-- 顶部栏 -->
		<Heador/>
		<!-- 轮播 -->
		<Hslider/>
		<!-- 新手特权 -->
		<Novice/>
		<!-- 极速借贷 -->
		<Borrow/>
		<!-- 理财精选 -->
		<Money/>
		<!-- 新品推荐 -->
		<Product/>
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
	import Novice from "../home/novice.vue"
	import Product from "../home/product.vue"
	export default {
		components:{
			Heador,
			Navbar,
			Footer,
			Hslider,
			Borrow,
			Life,
			Money,
			Novice,
			Product,
		},
	}
</script>