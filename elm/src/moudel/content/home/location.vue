<template>
	<section class="location subpage">
		<header>
			<router-link to="/home">
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</router-link>
			<span>请填写收货地址</span>
		</header>
		<section class="search">
			<i class="iconfont icon-49"></i>
			<input @keyup="getaddress" type="text" placeholder="请输入地址" v-model="address" />
		</section>
		<!--<section class="nowAddress">当前地址</section>-->
		<section class="addressList">
			<ul>
				<li v-for="(data,index) in addressData" @click="passAddress(index)">
					<router-link to="/home">
						<p>{{data.name}}</p>
						<p>{{data.address}}</p>
					</router-link>

				</li>
			</ul>
		</section>
	</section>

</template>

<script>
	import { getSearchAddress } from "../../../server/home/homeServer.js";
	import Vuex from 'vuex';
	export default {
		name: "location",
		data() {
			return {
				address: "",
				addressData: []
			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			...Vuex.mapActions({
				SelectLocation: "location/userSelectLocation"
			}),
			//获取输入地址周边的其他地址信息
			getaddress() {
				const {
					latitude,
					longitude
				} = this.location;
				getSearchAddress(this.address, latitude, longitude)
					.then(result => {
						this.addressData = result.data;
					})
			},
			passAddress(index) {
				//向首页头部传递地址名字
				this.$observer.$emit("pass-address", this.addressData[index].name);
				//改变全局的经纬度
				
				let _location = {
					latitude: this.addressData[index].latitude,
					longitude: this.addressData[index].longitude,
					city_id: this.addressData[index].city_id
				}
				_location.locationName= this.addressData[index].name;
				
				//将选择的地址信息添加到localStorage中供后面使用
				localStorage.setItem("STORE",JSON.stringify(_location));
				
				this.SelectLocation(_location)
			}
		},
		watch: {
			location: {
				handler() {
					//请求第一次的数据
					//或者修改过地址，重新请求数据
					this.getaddress();
				},
				deep: true
			}
		},
		created() {

		}
	}
</script>

<style scoped>
	.location {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #eee;
	}
	
	.location.subpage {
		bottom: 0;
		z-index: 5;
	}
	
	.location header {
		text-align: center;
		line-height: 0.4rem;
		font-size: 0.14rem;
		color: #fff;
		background-image: linear-gradient(90deg, #0af, #0085ff);
	}
	
	.location .icon-arrow-right-copy-copy-copy {
		position: absolute;
		left: .10rem;
		float: left;
		color: #FFFFFF;
		transform: rotate(180deg);
	}
	
	.search {
		position: relative;
		height: 0.44rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		background: #fff;
	}
	
	.search input {
		width: 2.96rem;
		height: 0.30rem;
		background: #f2f2f2;
		display: block;
		border: 0;
		box-sizing: border-box;
		padding-left: 0.25rem;
		color: #999;
		font-size: 0.10rem;
	}
	
	.search>i {
		position: absolute;
		font-size: 0.12rem;
		color: #999;
		left: 0.2rem;
	}
	
	.nowAddress {
		height: .34rem;
		width: 100%;
		box-sizing: border-box;
		line-height: 0.34rem;
		padding-left: 0.10rem;
		background: #F2F2F2;
		font-size: 0.10rem;
	}
	
	.addressList ul {
		height: 4.5rem;
		overflow: hidden;
		background: #fff;
	}
	
	.addressList li {
		height: 0.5rem;
		border-bottom: 1px solid #ccc;
		padding-left: 0.10rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box;
	}
	
	.addressList li a p:nth-child(1) {
		font-size: 0.14rem;
		color: #000;
		font-weight: bold;
	}
	
	.addressList li a p:nth-child(2) {
		font-size: 0.10rem;
		color: #333;
	}
</style>