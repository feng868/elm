<template>
	<section>
		<section id="header">
			<router-link to="/home" @keyup.enter="enter">
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</router-link>
			<i class="iconfont icon-49"></i>
			<input placeholder="输入商家、商品名称" v-model="name" @input="_input" @keyup.enter="searchbusiness" ref="searchVal" />
			<router-link to="/findbusiness/shop">
				<button>搜索</button>
			</router-link>
		</section>
		<section>
			<ul v-if="showUl">
				<li v-for="item in data" class="goods-list">
					<img :src="item.image_path" />
					<div class="goods-message">
						<div>
							<p>{{item.name}}</p>
							<i v-for="tag in item.tags" :style="{color:'#'+tag.name_color}">{{tag.name}}</i>
						</div>
						<span>评分{{item.rating}}</span>
					</div>
				</li>
			</ul>
			<ul class="searchUl" v-if="showUl">
				<li v-for="info in search">
					<i class="iconfont icon-49"></i>
					<span>{{info}}</span>
				</li>
			</ul>
		</section>
	</section>
</template>

<script>
	import { getBusinessData } from "../../server/home/homeServer.js";
	import Vuex from 'vuex';
	export default {

		name: "search-com",
		data() {
			return {
				data: null,
				search: null,
				name: null,
				SEARCH_HISTORY_VALUE: [],
				_link: null,
				showUl: true
			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			_input() {
				if(this.$refs.searchVal.value != "") {
					this.name = this.$refs.searchVal.value;
					this.getdata();
					this.showUl = true;

				} else {
					this.showUl = false;
				}
				this.$emit("pass-list", !this.showUl);
			},
			searchbusiness() {
				//				this.$observer.$emit("pass-keyword", this.name);
				if(this.$refs.searchVal.value != "") {
					if(!localStorage.SEARCH_HISTORY) {
						this.SEARCH_HISTORY_VALUE.push(this.name);
					} else {
						this.SEARCH_HISTORY_VALUE = JSON.parse(localStorage.SEARCH_HISTORY);
						if(this.SEARCH_HISTORY_VALUE.indexOf(this.name) == -1) {
							this.SEARCH_HISTORY_VALUE.push(this.name);
						}

					}

					let _data = JSON.stringify(this.SEARCH_HISTORY_VALUE);
					localStorage.setItem("SEARCH_HISTORY", _data);
					//跳转页面，将参数通过url传递
					this.$router.push({
						path: '/findbusiness/shop',
						query: {
							keyword: this.name
						}
					});

				}

			},
			getdata() {
				const {
					latitude,
					longitude,
					city_id,
				} = this.location;
				getBusinessData(this.name, latitude, longitude, city_id)
					.then(result => {
						this.data = result[0];
						this.search = result[1];
					})
			}
		},
		created() {

		},

	}
</script>

<style scoped>
	#header {
		height: 0.4rem;
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	#header a {
		text-align: center;
		font-size: 0.15rem;
		font-weight: bold;
		color: #ccc;
	}
	
	#header .icon-arrow-right-copy-copy-copy {
		display: inline-block;
		transform: rotate(180deg);
	}
	
	#header input {
		height: .24rem;
		width: 2.35rem;
		border: 0;
		background: #f8f8f8;
		box-sizing: border-box;
		font-size: 0.12rem;
		padding-left: 0.25rem;
		margin-left: 0.1rem;
	}
	
	#header button {
		background: #fff;
		border: 0;
		font-weight: bold;
		text-align: center;
		height: .24rem;
		outline: none;
	}
	
	#header .icon-49 {
		position: absolute;
		left: .4rem;
		font-size: .08rem;
	}
	
	.goods-list {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 0.48rem;
	}
	
	.goods-list .goods-message {
		width: 2.58rem;
		height: 0.48rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	
	.goods-list .goods-message div {
		display: flex;
	}
	
	.searchUl li {
		height: 0.35rem;
		width: 100%;
		padding: 0 .12rem;
		line-height: 0.35rem;
		box-sizing: border-box;
	}
	
	.searchUl span {
		display: inline-block;
		width: 2.8rem;
		border-bottom: 1px solid #eee;
	}
	
	.searchUl i {
		font-size: 0.12rem;
		color: #aaa;
	}
</style>