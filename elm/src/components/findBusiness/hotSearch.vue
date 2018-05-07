<template>
	<section class="history">
		<header class="clear">
			<span>热门搜索</span>
		</header>
		<section class="history_list">
			<i v-for="(item,index) in data" @click="searchWord(index)" ref="hotSarch">{{item.word}}</i>
		</section>
	</section>
</template>

<script>
	import { getHotSearchData } from "../../server/home/homeServer.js";
	import Vuex from 'vuex';
	export default {
		name: "hotSearch-com",
		data() {
			return {
				data: null
			}
		},
		computed: {
			...Vuex.mapState({
				location: state => state.location.locValue
			})
		},
		methods: {
			//得到接口传递的数据
			getdata() {
				const {
					latitude,
					longitude
				} = this.location;
				getHotSearchData(latitude, longitude)
					.then(result => {
						this.data = result;
					})
			},
			//点击热门搜索搜索商品
			searchWord(index) {

				this.$router.push({
					path: '/findbusiness/shop',
					query: {
						keyword: this.$refs.hotSarch[index].innerText
					}
				})
			}
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
			if(this.location.latitude) {
				this.getdata();
			}
		}
	}
</script>

<style scoped>
	.history header {
		height: .3rem;
		line-height: .3rem;
	}
	
	.history header span {
		float: left;
		margin-left: 0.12rem;
		font-size: 0.14rem;
		font-weight: bold;
	}
	
	.history_list {
		min-height: .5rem;
		padding: 0rem 0 0 0.12rem;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		flex-wrap: wrap;
		margin-top: 0.1rem;
	}
	
	.history_list i {
		padding: 0.06rem 0.1rem;
		display: inline-block;
		color: #666;
		background-color: #f7f7f7;
		margin-right: 0.1rem;
		margin-bottom: 0.1rem;
		border-radius: 0.02rem;
	}
</style>