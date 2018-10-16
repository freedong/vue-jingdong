<!-- 轮播图组件 -->

<!-- vue-awesome-swiper插件 -->

<template lang="html">
	<section :class="cname">
		<swiper :options="options" :not-next-tick="options.notNextTick">
			<swiper-slide v-for="item in items" :key="item.href">
				<router-link :to="{ name:item.href }">
					<img :src="item.src" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
		</swiper>
	</section>
</template>

<script>
	// 引用组件
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default {
		// 注册组件
		components: {
			swiper,
			swiperSlide,
		},
		// 属性
		props:{
			cname:{
				type:String,
				default:"",
			},
			options:{
				type:Object,
				default(){
					return {
						autoplay:true,
						loop:true,
						pagination:{
							el:".swiper-pagination",
						},
						notNextTick:false,
					}
				},
			},
			items:{
				type:Array,
				default() {
					return []
				},
			},
		},
	}
</script>

<style lang="scss">
	// 引用组件样式
	@import "~swiper/dist/css/swiper.css";
</style>