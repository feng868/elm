<template>

	<section class="shop">
		<list>

		</list>
	</section>

</template>

<script>
	import { getBusinessPageData } from "../../server/home/homeServer.js";

	export default {
		name: "shopList-com",
		data() {
			return {
				keyword: null
			}
		},
		computed: {

		},
		methods: {
			getdata(keyword) {

				let _location = JSON.parse(localStorage.STORE);

				const {
					latitude,
					longitude
				} = _location
				getBusinessPageData(latitude, longitude, 0, 15, keyword, 3)
					.then(result => {
						console.log(result)
						this.$observer.$emit("pass-goods", result)
					})
			}
		},
		mounted() {

		},
		counted() {

		},
		created() {
			let keyword = this.$route.query.keyword;

			this.keyword = keyword;

			if(this.keyword != keyword) {
				this.getdata(this.keyword)
			} else {
				this.getdata(keyword)
			}
		}
	}
</script>

<style scoped>
	.shop {
		/*height: 20rem;
	overflow: auto;*/
	}
</style>

<!--
	
	



	search_item_type=3&
	is_rewrite=1&
	extras[]=activities&
	extras[]=coupon&
	terminal=h5
	
	
	
	
	latitude=22.626024&
	longitude=113.837884&
	search_item_type=3&
	is_rewrite=1&
	extras[]=activities&
	extras[]=coupon&
	terminal=h5
-->