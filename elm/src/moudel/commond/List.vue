<template>
	<section class="shoplist">
		<section v-for="(seller,index) in data" class="shop_box one-bottom-px">
			<section class="shop_box">
				<section class="shop" @click="toDetails(index)">
					<section class="shopImg">
						<img :src="seller.ImgPath" />
					</section>
					<section class="shop_introduce">
						<ul>
							<li class="shop_title">
								<i v-if="seller.brand">品牌</i>
								<h4>{{seller.name}}</h4>
								<span v-if="seller.recommend.is_ad" class="advertising">{{seller.recommend.reason}}</span>
							</li>
							<li class="shop_sales ">
								<i>{{seller.rating}}月售{{seller.recent_order_num}}单</i>
							</li>
							<li class="shop_delivery">
								<div><i>￥{{seller.price}}起送</i> | <i>配送费￥{{seller.delivery_fee}}</i></div>
								<div><i>{{seller.distance}}m</i> | <i>{{seller.time}}分钟</i></div>
							</li>
							<li>
								<!--<img :src="seller.publicPath"/>-->
							</li>
						</ul>
					</section>
				</section>
				<section class="shop_active_list">
					<span class="shop_active_num" @click="showActive(seller,index)">
				{{seller.active.length}}个活动
				<i class="iconfont icon-sanjiaodown" ref="arrow"></i>
			</span>
					<ul>
						<li v-for="(active,index) in seller.active" class="sp_active" v-if="index<2 || seller.isShow">
							<span :style="{background: '#'+active.icon_color}">{{active.icon_name}}</span>
							<span class="omit">{{active.description}}</span>
						</li>
					</ul>
				</section>
			</section>
		</section>
	</section>
</template>

<script>
	export default {
		name: "List",
data() {
		return {
			data:""
			}
		},
		methods: {
			showActive(seller, index) {
				seller.isShow = !seller.isShow;
				this.$nextTick(() => {
					//更新滚动视图
					this.$emit('update-list');
				})
				if(seller.isShow) {
					this.$refs.arrow[index].style.transform = "rotate(180deg)";
					this.$refs.arrow[index].style.transition = "all 1s";
				} else {
					this.$refs.arrow[index].style.transform = "";
				}
			},
			toDetails(index) {
				this.$router.push({
					path: "/details",
					query: {
						id: this.data[index].id
					}
				})
			}
		},
		mounted() {

		},
		created() {
			//获取到首页goodList传递的商品信息
			console.log(this.data)
			this.$observer.$on("pass-goods", (result) => {
				this.data = result;
				console.log(result)
			})

		}
	}
</script>

<style scoped>
	.shop_box {
		/*height:1.28rem*/
		padding: 0.1rem;
	}
	
	.shop {
		display: flex;
		justify-content: center;
	}
	
	.shop>section>img {
		width: 0.55rem;
		height: 0.55rem;
	}
	
	.public img {
		width: 0.09rem;
		height: 0.09rem;
	}
	
	.shopImg {}
	
	.shop_introduce {
		width: 2.48rem;
		padding-left: .1rem;
		box-sizing: border-box;
	}
	
	.shop_introduce .shop_title h4 {
		display: inline-block;
		color: #000;
		font-size: 0.14rem;
		font-weight: bold;
	}
	
	.shop_introduce .shop_title i {
		width: 0.23rem;
		height: 0.14rem;
		background-image: linear-gradient(-139deg, #fff100, #ffe339);
		font-size: 0.08rem;
		padding: 0.01rem;
		text-align: center;
		color: #000;
	}
	
	.shop_sales {
		font-size: 0.09rem;
		margin: 0.05rem;
	}
	
	.shop_delivery {
		display: flex;
		justify-content: space-between;
	}
	
	.advertising {
		float: right;
	}
	
	.shop_active_list {
		margin-top: 0.1rem;
		padding-left: .75rem;
		position: relative;
	}
	
	.shop_active_list .shop_active_num {
		position: absolute;
		right: 0rem;
		z-index: 100;
	}
	
	.shop_active_list .shop_active_num i {
		font-size: 0.12rem;
		display: inline-block;
	}
	
	.shop_active_list .shop_active_num .arrow {
		position: absolute;
		right: -.15rem;
		top: 0rem;
		transform: rotate(180deg);
	}
	
	.shop_active_list .sp_active {
		margin: 0.02rem 0;
		display: flex;
		justify-content: flex-start;
	}
	
	.shop_active_list .sp_active span:nth-child(1) {
		border-radius: 0.02rem;
		color: #fff;
		margin-right: 0.05rem;
	}
	
	.omit {
		width: 1.52rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>