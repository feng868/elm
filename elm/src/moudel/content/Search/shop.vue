<template>
	<div id="shop_list">
		<section class="shop_condition">

		</section>
		<section ref="shopLisrt" class="shopLisrt">
			<shopList-com></shopList-com>
		</section>

	</div>
</template>

<script>
	import ShopList from "../../../components/findBusiness/shopList.vue";
	export default {
		name: "shop-com",
		components: {
			[ShopList.name]: ShopList
		},
		mounted() {
			console.log("1")
			const shopLisrtDom = this.$refs.shopLisrt;
			const shopLisrtScroll = new IScroll(shopLisrtDom, {
				probeType: 3
			})
			shopLisrtScroll.on("beforeScrollStart", () => {
				shopLisrtScroll.refresh()
			})
		},
		created() {

		}
	}
</script>

<style scoped>
	#shop_list {
		width: 100%;
		position: absolute;
		top: .4rem;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 2;
		/*overflow: hidden;*/
	}
	
	.shop_condition {
		height: .74rem;
		background: lavender;
	}
	
	.shopLisrt {
		/*position: absolute;
		top:.74rem;
		bottom: 0;
		overflow: hidden;*/
	}
</style>