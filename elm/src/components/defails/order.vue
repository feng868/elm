<template>
	<section>
		<menu-com> </menu-com>
	</section>
</template>

<script>
	import menu from "./order/detailsmenu.vue";
	export default{
		name:"order-com",
		components:{
			[menu.name]:menu
		}
	}
</script>

<style>
</style>