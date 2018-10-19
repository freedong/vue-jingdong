<template lang="html">
	<div>
		<Heador/>
		<Mslider/>
		<Ada/>
		<Money/>
		<Adb/>
		<Finance/>
		<Adc/>
	    <Footer cname="mfooter"/>
		<Navbar/>
	</div>
</template>


<script>
	import Heador from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Mslider from "../money/mslider.vue"
	import Ada from "../money/ada.vue"
	import Adb from "../money/adb.vue"
	import Adc from "../money/adc.vue"
	import Finance from "../money/finance.vue"
	import Money from "../money/money.vue"
	export default {
		components: {
			Heador,
			Footer,
			Navbar,
			Mslider,
			Ada,
			Adb,
			Adc,
			Finance,
			Money,
		}
	}
</script>



<style lang="scss">
	.mfooter{
		margin-top: 0!important;
		ul{
			li:first-child{
				display: none;
			}
		}
	}
</style>