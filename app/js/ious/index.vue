<template lang="html">
	<div>
		<Heador/>
		<Islider/>
		<Welfare/>
		<Service/>
		<Footer/>
		<Navbar/>
	</div>
</template>


<script>
	import Heador from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Islider from "../ious/islider.vue"
	import Service from "../ious/service.vue"
	import Welfare from "../ious/welfare.vue"
	export default {
		components: {
			Heador,
			Footer,
			Navbar,
			Islider,
			Service,
			Welfare,
		},
	}
</script>


<style lang="scss" module>
	
</style>