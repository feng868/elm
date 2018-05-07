<template>
	<main id="content" ref="content">
		<section>
			<section id="up" v-if="canRefresh">
				<img :src="scrollImg" ref="srcollImg" :class="{active:isclass}" />
				<span ref="upwd">下拉刷新</span>
			</section>
			<slot>
			</slot>
			<section id="down" v-if="canRefresh">
				<img :src="scrollImg" :class="{active:loadmoreActive}" />
				<span ref="upwd1">上拉加载</span>
			</section>
		</section>
	</main>
</template>

<script>
	export default {
		name: "content-com",
		props: {
			canRefresh: Boolean,
			canLoadmore: Boolean,
			canroll: Boolean
		},
		data() {
			return {
				isclass: false,
				scrollImg: "../../../static/images/arrow.png",
				loadmoreActive: false,
			}
		},
		methods: {
			refresh() {
				this.contentScroll.refresh();
			}
		},
		mounted() {

			const contentDom = this.$refs.content;
			const contentScroll = new IScroll(contentDom, {
				probeType: 3,
				scrollbars: true, //显示滚动条
				fadeScrollbars: true, //滚动条淡入淡出
				scrollY: true, //x轴可以滚动，默认为false
				//mouseWheel: true,//鼠标滚动
				//click: true,
				bounce: this.canroll
			})
			//将contentScroll放在this中,使得全局可以使用
			this.contentScroll = contentScroll;
			//开始滚动前，更新视图大小
			contentScroll.on("beforeScrollStart", () => {
			console.log(this)
				this.refresh();
			})

			let t = 0.4 * Number((document.documentElement.style.fontSize).split("p")[0]);
			//滚动的位置
			contentScroll.on('scroll', () => {
				this.$emit('scroll', contentScroll.y + t);
			});

			let scrollwd = this.$refs.upwd;
			let scrolldown = this.$refs.upwd1;
			let scrollImg = this.$refs.srcollImg;

			if(this.canRefresh) {
				contentScroll.scrollTo(0, -t);

				//下拉刷新
				contentScroll.on("scroll", () => {

					if(contentScroll.y <= 0) {
						scrollwd.innerText = "下拉刷新";
						this.isclass = true;

					} else {
						scrollwd.innerText = "释放刷新";
						this.isclass = false;
					}
				})
				contentScroll.on("scrollEnd", () => {
					if(contentScroll.y < 0 && contentScroll.y > -t) {
						contentScroll.scrollTo(0, -t, 1000);
					} else if(contentScroll.y >= 0) {
						scrollwd.innerText = '正在刷新';
						this.scrollImg = "../../../static/images/ajax-loader.gif";

						//现在要执行刷新的请求

						//触发首页刷新
						this.$emit("on-refresh");

						setTimeout(function() {
							contentScroll.scrollTo(0, -t, 1000);
							scrollwd.innerText = '下拉可以刷新';
							this.scrollImg = "../../../static/images/arrow.png";
						}, 2000)
					}
				})
			}

			if(this.canLoadmore) {
				//上拉加载
				contentScroll.on("scroll", () => {
					//获取Y轴最大值
					let maxY = contentScroll.maxScrollY;
					if(maxY - 1 < contentScroll.y) { //没达到加载条件
						scrolldown.innerText = "上拉加载";
						this.loadmoreActive = false;
					} else {
						this.loadmoreActive = true;
						scrolldown.innerText = "释放刷新";
					}
				})

				contentScroll.on('scrollEnd', () => {
					var maxY = contentScroll.maxScrollY;
					var y = contentScroll.y;
					if(y >= maxY + 50) {
						//不需要做修改
					} else if(y < maxY + 50 && y > maxY) {
						//可以显示上拉加载更多了，收回
						contentScroll.scrollTo(0, maxY + 50, 200);
					} else if(y <= maxY) {
						//完全显示了，执行加载更多
						this.scrollImg = '../../../static/images/ajax-loader.gif';
						this.scrolldown = '正在加载中...';
						//通知加载更多

						setTimeout(() => {
							this.$emit('on-loadmore');
							this.scrollImg = "../../../static/images/arrow.png";
							//										this.loadmoreImg = 'static/img/arrow.png';
							//										this.loadmoreText = '上拉加载更多';
						}, 1000);
					}

				})
			}
		},
		created() {

		}
	}
</script>

<style scoped>
	#content {
		width: 100%;
		position: absolute;
		top: 0.4rem;
		bottom: 0.49rem;
		overflow: hidden;
	}
	
	#up {
		height: 0.4rem;
		width: 100%;
		text-align: center;
		line-height: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	#up img {
		width: .20rem;
		height: .20rem;
	}
	
	#up .active {
		width: .20rem;
		height: .20rem;
		transform: rotate(180deg);
	}
	
	#down {
		height: 0.4rem;
		width: 100%;
		text-align: center;
		line-height: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	#down img {
		width: .20rem;
		height: .20rem;
	}
	
	#down .active {
		width: .20rem;
		height: .20rem;
		transform: rotate(180deg);
	}
	
	.iScrollLoneScrollbar,
	.iScrollIndicator {
		width: 4px !important;
	}
</style>