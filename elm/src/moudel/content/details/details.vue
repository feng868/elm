<template>
	<section ref="details" id="Details-warp">
		<section class="height">
			<section id="top-warp">
				<header id="header">
					<section class="logo">
						<img :src="data.ImgPath" />
					</section>
					<section class="details">
						<h2>
						<span v-if="data.brand">品牌</span>
						<p>{{data.name}}</p>
					</h2>
						<p>
							<span>{{data.rating}}</span>
							<span>月售{{data.recent_order_num}}单</span>
							<span>商家配送  约{{data.time}}分钟</span>
							<span>距离{{data.distance}}m</span>
						</p>
						<p class="details_ad">{{data.promotion_info}}</p>
					</section>
					<section class="details_active">
						<ul>
							<li v-for="(item,index) in data.active" v-if="index<1">
								<span :style="{background:'#'+item.icon_color}">{{item.icon_name}}</span>
								<span>{{item.tips}}</span>
								<span>{{data.active.length}}个优惠</span>
							</li>
						</ul>
					</section>
				</header>
			</section>
			<nav class="nav">
				<section id="tab" class="one-bottom-px">
					<ul>
						<li v-for="(item,index) in full" @click="active(index)" ref="ali">
							{{item}}
						</li>
					</ul>
				</section>
			</nav>
			<order-com v-show="index==0"></order-com>
			<merchant-com v-show="index==2"></merchant-com>
			<evaluate-com v-show="index==1"></evaluate-com>
		</section>
	</section>
</template>

<script>
	import { getBusinessDetailsData } from "../../../server/home/homeServer.js";
	import order from "../../../components/defails/order.vue";
	import merchant from "../../../components/defails/merchant.vue";
	import evaluate from "../../../components/defails/evaluate.vue";

	export default {
		name: "details-com",
		data() {
			return {
				data: "",
				index: 0,
				full: ["点餐", "评价", "商家"]
			}
		},
		components: {
			[order.name]: order,
			[merchant.name]: merchant,
			[evaluate.name]: evaluate,
		},
		methods: {
			indexaction(index) {
				this.index = index;
			},
			getdata() {
				getBusinessDetailsData(22.626024, 113.837884)
					.then(result => {
						this.data = result;
						console.log(result)
					})
			},
			active(index) {
				for(let i = 0; i < this.$refs.ali.length; i++) {
					this.$refs.ali[i].className = "";
				}
				this.$refs.ali[index].className = "active";
				this.index = index;

			}
		},
		mounted() {
			let detailsDom = this.$refs.details;
			const detailsScroll = new IScroll(detailsDom, {
				probeType: 3,
				bounce: false
			})
			detailsScroll.on("beforeScrollStart", () => {
				detailsScroll.refresh()
			})
		},
		created() {
			this.getdata();
		}
	}
</script>

<style scoped>
	#Details-warp {
		position: absolute;
		top: 0;
		bottom: 0.49rem;
		width: 100%;
		overflow: hidden;
	}
	/*.height {
		height: 7.2rem;
	}*/
	
	#top-warp {
		height: 2.03rem;
	}
	
	#header .logo {
		height: 0.58rem;
		background: #eee;
		position: relative;
	}
	
	#header .logo img {
		width: 0.55rem;
		height: 0.55rem;
		position: absolute;
		bottom: -.2rem;
		left: 50%;
		margin-left: -0.25rem;
	}
	
	#header .details {
		height: .90rem;
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
	}
	
	.details h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		color: #000;
	}
	
	.details h2 span {
		width: 0.30rem;
		height: 0.14rem;
		background-image: linear-gradient(-139deg, #fff100, #ffe339);
		font-size: 0.08rem;
		padding: 0.01rem;
		text-align: center;
		color: #000;
		margin-right: 0.08rem;
	}
	
	.details p {
		text-align: center;
	}
	
	.details_ad {
		text-align: center;
		width: 1.86rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 0.6rem;
	}
	
	.details_active {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 0.21rem;
		line-height: 0.21rem;
		margin-top: 0.05rem;
	}
	
	.details_active ul {
		border: 1px solid #ccc;
	}
	
	.details_active ul>li {
		text-align: center;
		/*width: 2.96rem;*/
	}
	
	.details_active ul li span:nth-child(2) {
		width: 1.07rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	/*nav导航*/
	
	#tab {
		height: 0.35rem;
	}
	
	#tab ul {
		display: flex;
		height: 0.35rem;
		justify-content: space-around;
		align-items: center;
	}
	
	#tab ul li {
		height: 0.35rem;
		line-height: 0.35rem;
		border-bottom: .02rem solid #fff;
		box-sizing: border-box;
		color: #000;
	}
	
	#tab ul .active {
		border-bottom: .02rem solid #00AAFF;
	}
</style>