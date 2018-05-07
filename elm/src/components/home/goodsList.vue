<template>
	<main id="main">
		<h2>---推荐商家---</h2>
		<list></list>
	</main>
</template>

<script>
	import { getBusiness } from "../../server/home/homeServer.js";
	import Vuex from 'vuex';
	export default {
		name: "goodsList-com",
		data() {
			return {
				SellerData: null

			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			//请求商家推荐数据
			getdata() {
				const {
					latitude,
					longitude
				} = this.location;
				//				console.log("获取数据")
				console.log(latitude, longitude)
				getBusiness(latitude, longitude, 0, 8)
					.then(result => {
						this.SellerData = result;
						this.$observer.$emit("pass-goods", result)
					})
			},
			//请求加载商家推荐数据
			appendData() {
				const {
					latitude,
					longitude
				} = this.location;
				console.log(latitude, longitude)
				getBusiness(latitude, longitude, 0, 8)
					.then(result => {
						//this.SellerData = this.SellerData.concat(result);
						this.SellerData = [...this.SellerData, ...result];
						this.$observer.$emit("pass-goods", this.SellerData)
					})
			}
		},
		watch: {
			location: {
				handler() { //请求第一次的数据
					//或者修改过地址，重新请求数据
					//					console.log("商家推荐")
					this.getdata();
				},
				deep: true
			}
		},
		created() {
			if(this.location.latitude) {
				console.log(11111)
				this.getdata();
			}
		}

	}
</script>

<style scoped>
	#main {
		width: 100%;
	}
	
	#main h2 {
		text-align: center;
		font-size: 0.14rem;
		color: #000;
		height: 0.3rem;
		line-height: 0.3rem;
		margin: 0.15rem 0;
	}
</style>