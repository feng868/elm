<template>
	<div class="swiper-container" ref="banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="https://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/" />
			</div>
			<div class="swiper-slide"><img src="https://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/" /></div>

		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

	</div>
</template>

<script>
	export default {
		name: "banner-com",
		mounted() {
			this.mySwiper = new Swiper(this.$refs.banner, {
				loop: true,
				pagination: '.swiper-pagination',
				autoplay: 2000,
				autoplayDisableOnInteraction : false,
			})
		}
	}
</script>

<style scoped>

	.swiper-container {
		width: 100%;
		height: 0.9rem;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 0.9rem;
	}
</style>