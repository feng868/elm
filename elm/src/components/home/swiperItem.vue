<template>

	<swiper :options="swiperOption" ref="mySwiper" v-if="slideList.length>0">
		<div class="swiper-slide" v-for="slide in slideList" v-once>
			<section v-for="category in slide" class="category">
				<img :src="category.ImgPath" />
				<span>{{category.name}}</span>
			</section>
		</div>

		<div class="swiper-pagination" slot="pagination"></div>

	</swiper>

	<!--<div class="swiper-container" ref="list">
		<div class="swiper-wrapper" v-if="slideList.length>0">
			<div class="swiper-slide" v-for="slide in slideList" v-once>
					<section v-for="category in slide" class="category">
						<img :src="category.ImgPath" />
						<span>{{category.name}}</span>
					</section>
			</div>
		</div>

		<div class="swiper-pagination"></div>

	</div>-->

</template>

<script>
	import { getShopsData } from "../../server/home/homeServer.js";
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import Vuex from 'vuex';
	export default {
		name: "swiperItem-com",
		data() {
			return {
				slideList: [],
				swiperOption: {
					loop: true,
					grabCursor: true,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
				}
			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			//			update(){
			//			//更新滚动视图
			//			this.mySwiper.update();
			//			}
			getdata() {
				const {
					latitude,
					longitude
				} = this.location;
				getShopsData(latitude, longitude, ['main_template', 'favourable_template', 'svip_template'])
					.then(result => {
						this.slideList = result;
						//数据变化，导致dom更新完毕之后，刷新轮播图

						//			this.$nextTick(()=>{
						//				//更新滚动视图
						//				console.log(this.update)
						//				console.log(this.mySwiper.update)
						//				this.update();
						//			})
					})
			}
		},
		mounted() {

			//			this.mySwiper = new Swiper(this.$refs.list, {
			//				loop: true,
			//				pagination: '.swiper-pagination'
			//			})

		},
		watch: {
			location: {
				handler() {
					//请求第一次的数据
					//或者修改过地址，重新请求数据
					this.getdata();
				},
				deep: true
			}
		},
		created() {

			this.getdata()

		}
	}
</script>

<style scoped>
	.swiper-container {
		height: 1.51rem;
	}
	
	.swiper-container .category {
		padding: .1rem 0;
		width: 20%;
		float: left;
	}
	
	.swiper-container .category img {
		width: .3rem;
		margin: 0 auto;
	}
	
	.swiper-container .category span {
		display: block;
		text-align: center;
		color: #666;
	}
	
	.activity img {
		width: 100%;
	}
</style>