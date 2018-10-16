<!-- 按钮组件 -->

<template lang="html">
	<div :class="[btnClass,cname]">
		<!-- 插槽 -->
		<slot/>
	</div>
</template>
<script>
	export default {
		// 父组件向子组件传值用props属性
		// 子组件向父组件传值用events事件
		props:{
			cname:{
				type:String,
				default: "",
			},
		},
		data(){
			return {
				btnClass:"btn",
			}
		},
	}
</script>
<style lang="scss">
	@import "../../css/element.scss";
	.btn {
		@include btn;
	}
</style>