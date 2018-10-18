<template lang="html">
	<div>
		<Heador/>
		<Mslider/>
		<Ada/>
	    <Footer/>
		<Navbar/>
	</div>
</template>


<script>
	import Heador from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Mslider from "../money/mslider.vue"
	import Ada from "../money/ada.vue"
	export default {
		components: {
			Heador,
			Footer,
			Navbar,
			Mslider,
			Ada,
		}
	}
</script>



<style lang="scss" module>
	
</style>