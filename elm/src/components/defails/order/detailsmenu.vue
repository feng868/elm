<template>
	<section class="wapper">
		<section class="menu" ref="menu">
			<ul>
				<li v-for="item in data">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</section>
		<section class="shop_list" ref="shop_list">
			<ul class="shop_list_ul">
				<li v-for="fd in foods">
					<img :src="fd.image_path" />
					<div>
						<h4>{{fd.food_name}}</h4>
						<p><span>月售{{fd.month_sales}}份</span><span>好评率{{fd.satisfy_rate}}%</span></p>
						<span>￥{{fd.specfoods[0].price}}</span>
					</div>
				</li>
			</ul>
		</section>
	</section>
</template>

<script>
	import { getDetailsMenu } from "../../../server/datails/datailsServar.js";
	export default {
		name: "menu-com",
		data() {
			return {
				data: null,
				foods: null,
				id: ""
			}
		},
		methods: {
			getdata(id) {
				getDetailsMenu(id)
					.then(result => {
						this.data = result[0];
						this.foods = result[1]
					})
			}
		},
		mounted() {
			let menuDom = this.$refs.menu;
			const menuScroll = new IScroll(menuDom, {
				probeType: 3,
				bounce: false
			});
			menuScroll.on("beforeScrollStart", () => {
				menuScroll.refresh()
			})
			let shop_listDom = this.$refs.shop_list;
			const shop_listScroll = new IScroll(shop_listDom, {
				probeType: 3,
				bounce: false
			})
			shop_listScroll.on("beforeScrollStart", () => {
				shop_listScroll.refresh()
			})
		},
		beforeCreated() {

		},
		created() {

		},
		activated() {
			console.log("1")
			this.getdata(this.$route.query.id);
		}
	}
</script>

<style scoped>
	.wapper {
		display: flex;
		justify-content: space-between;
	}
	
	.menu {
		height: 4.82rem;
		width: 0.65rem;
		overflow: hidden;
	}
	
	.menu ul li {
		height: 0.42rem;
		text-align: center;
		background: #eee;
	}
	
	.menu ul li span {
		height: 0.42rem;
		line-height: 0.42rem;
		display: block;
		width: 0.65rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.shop_list {
		height: 4.82rem;
		width: 2.45rem;
		overflow: hidden;
	}
	
	.shop_list ul li {
		height: 0.98rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.shop_list ul li img {
		height: .65rem;
		width: .65rem;
	}
	
	.shop_list ul li div {
		width: 1.70rem;
	}
	
	.shop_list ul li div h4 {
		font-size: 0.14rem;
		font-weight: bold;
		color: #000;
	}
	
	.shop_list ul li div p {
		height: 0.2rem;
		line-height: 0.2rem;
	}
	
	.shop_list ul li div p span {
		margin-right: 0.08rem;
	}
	
	.shop_list ul li div>span {
		margin-top: 0.1rem;
		display: block;
		font-size: 0.14rem;
		color: #FF5339;
		font-weight: bold;
	}

</style>