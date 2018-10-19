<template lang="html">
	<Panel title="金融头条" :class="$style.panel">
		<section :class="$style.content">
			<swiper :options="options">
				<swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
				<swiper-slide>签到领流量，1元500M！<em>></em></swiper-slide>
			</swiper>
		</section>
	</Panel>
</template>


<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	import Panel from "../core/panel.vue"
	export default {
		components: {
			Panel,
			swiper,
			swiperSlide,
		},
		data() {
			return {
				options: {
					autoplay:true,
					loop:true,
					direction:"vertical",
				},
			}
		},
	}
</script>


<style lang="scss" module>
	@import "../../css/element.scss";
	.panel{
		
	}
</style>