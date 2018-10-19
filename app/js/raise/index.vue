<template lang="html">
	<div>
		<Header/>
		<Rslider/>
		<Daily/>
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
	export default {
		components: {
			Header,
			Footer,
			Navbar,
			Daily,
			Rslider,
		}
	}
</script>



<style lang="scss" module>
	
</style>