<template lang="html">
	<div>
		<Header/>
		<Rslider/>
		<In/>
		<Daily/>
		<More/>
		<Footer/>
		<Navbar/>	
	</div>
</template>


<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Daily from "../raise/daily.vue"
	import Rslider from "../raise/rslider.vue"
	import In from "../raise/in.vue"
	import More from "../raise/more.vue"
	export default {
		components: {
			Header,
			Footer,
			Navbar,
			Daily,
			Rslider,
			In,
			More,
		}
	}
</script>



<style lang="scss" module>
	
</style>