<template>
	<section id="header">
		<router-link to="/home/location">
			<i class="iconfont icon-dingwei"></i> {{title}}
			<i class="iconfont icon-sanjiaodown"></i>
		</router-link>
	</section>
</template>

<script>
	import { getNowAddress } from "../../server/home/homeServer.js";
	import Vuex from 'vuex';
	export default {
		name: "headerHome",
		data() {
			return {
				title: "正在识别定位",
				citr_id: null
			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			//获取定位定到的位置名字
			getdata() {
				let _this = this;
				const {
					latitude,
					longitude
				} = this.location;
				getNowAddress(latitude, longitude)

					.then(result => {
						_this.title = result.name;
						//将定位到的数保存在localStorage中
						let _location = {
							latitude: result.latitude,
							longitude: result.longitude,
							city_id: result.city_id
						}
						localStorage.setItem("STORE", JSON.stringify(_location));
					})
				//接受location传递过来的地址名字
				this.$observer.$on("pass-address", (result) => {
					this.title = result;
				});

			},
		},
		//监听location有变化时
		watch: {
			location: {
				handler() {
					//请求第一次的数据
					//或者修改过地址，重新请求数据
					console.log("222")
					this.getdata();

				},
				deep: true
			}
		},
		created() {
			//页面渲染后,location.latitude存在,（在其他页面刷新过后，执行的）
			if(this.location.latitude) {
				console.log(11111)
				this.getdata();
			}
		}
	}
</script>

<style scoped>
	#header {
		height: 0.4rem;
		width: 100%;
		background-image: linear-gradient(90deg, #0af, #0085ff);
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
	}
	
	#header a {
		text-align: center;
		line-height: 0.4rem;
		font-size: 0.15rem;
		font-weight: bold;
		color: #fff;
		margin-left: 0.12rem;
		float: left;
	}
	
	.icon-dingwei {
		font-size: 0.14rem;
	}
	
	.icon-sanjiaodown {
		font-size: 0.10rem;
		transform: scale(0.5);
	}
</style>