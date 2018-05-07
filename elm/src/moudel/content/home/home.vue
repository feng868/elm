<template>
	<div>
		<headerHome v-show="SearchShow"></headerHome>
		<search-com v-if="!SearchShow"></search-com>
		<content-com :canRefresh="true" @on-refresh="handleRefresh()" :canLoadmore="true" @on-loadmore="handleUpdateList()" :canroll="true" @scroll="handleContentScroll">
			<search-com></search-com>
			<banner-com></banner-com>
			<swiperItem-com ref="swiper"></swiperItem-com>
			<section class="active">
				<div class="active-limit">
					<h3 style="color:#f40">限量抢购</h3>
					<span>超值美味 9.9元起</span>
					<div>
						<span>1478人</span>正在抢 >
					</div>
					<img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" /></div>
				<div class="active-combo">
					<h3>品质套餐</h3>
					<span>搭配齐全吃的好</span>
					<div>
						立即抢购 >
					</div>
					<img src="//fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" /></div>
			</section>
			<goodsList-com ref="list" @update-list="handleListrefresh()"></goodsList-com>
		</content-com>

		<transition name="slide">
			<router-view></router-view>
		</transition>

	</div>
</template>

<script>
	import headerHome from "../../../components/home/headerHome.vue";
	import banner from "../../../components/home/banner.vue";
	import goodsList from "../../../components/home/goodsList.vue";
	import searchHome from "../../../components/home/searchHome.vue";
	import swiperItem from "../../../components/home/swiperItem.vue";
	export default {
		name: "home-com",
		components: {
			[banner.name]: banner,
			[goodsList.name]: goodsList,
			[headerHome.name]: headerHome,
			[searchHome.name]: searchHome,
			[swiperItem.name]: swiperItem
		},
		data() {
			return {
				headline: "",
				onRefresh: false,
				SearchShow: true
			}
		},
		methods: {
			update() {
				//更新滚动视图
				this.swiper.update();
			},
			//更新视图大小
			refresh() {
				this.myScroll.refresh();
			},

			//执行下拉刷新，由home中的list组件完成下拉刷新
			
			handleRefresh() {
				this.$refs.list.getdata();
			},
			handleListrefresh() {
				this.refresh();
			},
			handleUpdateList() {
				this.$refs.list.appendData();
			},
			handleContentScroll(position) {
				let t = 0.4 * Number((document.documentElement.style.fontSize).split("p")[0]);

				if(position < -t) {
					this.SearchShow = false;

				} else {

					this.SearchShow = true;
				}
			}
		},
		mounted() {

		},
		created() {}
	}
</script>

<style scoped>
	.active {
		display: flex;
		justify-content: space-around;
	}
	
	.active>div {
		background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
		width: 1.50rem;
		height: 1.2rem;
		padding: .1rem 0 0 .12rem;
		box-sizing: border-box;
		position: relative;
	}
	
	.active .active-limit {
		margin-left: .05rem;
	}
	
	.active .active-combo {
		margin-right: .05rem;
	}
	
	.active>div span {
		font-size: 0.11rem;
	}
	
	.active>div>div {
		color: #000;
	}
	
	.active>div>img {
		width: 1.02rem;
		height: .68rem;
		position: absolute;
		right: 0;
		bottom: -.06rem;
	}
	
	.slide-enter,
	.slide-leave-to {
		transform: translateX(100%);
	}
	
	.slide-enter-active,
	.slide-leave-active {
		transition: transform 200ms;
	}
	
	.iScrollLoneScrollbar,
	.iScrollIndicator {
		width: 4px !important;
	}
</style>