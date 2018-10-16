<template lang="html">
	<div>
		<Heador/>
		<Hslider/>
		<Navbar/>
		<Footer/>

	</div>
</template>

<script>
	import Heador from "../public/header.vue"
	import Navbar from "../public/navbar.vue"
	import Footer from "../public/footer.vue"
	import Hslider from "../home/hslider.vue"
	export default {
		components:{
			Heador,
			Navbar,
			Footer,
			Hslider,
		},
	}
</script>