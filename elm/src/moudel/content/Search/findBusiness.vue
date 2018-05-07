<template>
	<section id="search">
		<section>
			<search-com @pass-list="action"></search-com>
			<!--<content-com>
				
			</content-com>-->
			<div v-if="show">
				<history-com></history-com>
				<hotSearch-com></hotSearch-com>
			</div>
		</section>
			<router-view>

			</router-view>
	</section>
</template>

<script>
	import Serach from "../../../components/findBusiness/search.vue";
	import History from "../../../components/findBusiness/history.vue";
	import HotSearch from "../../../components/findBusiness/hotSearch.vue";
	export default {
		name: "findbusiness-com",
		data() {
			return {
				show: true
			}
		},
		components: {
			[Serach.name]: Serach,
			[History.name]: History,
			[HotSearch.name]: HotSearch
		},
		methods: {
			//是否显示热门搜索和搜索记录
			action(result) {
			
				this.show = result
			}
		},
		created() {
			
			
			//接受输入框传递的搜索内容
//			this.$observer.$on("pass-keyword", (result) => {
//				this.keyword = result;
//			})
		    //热门搜索传递过来的值
//			this.$observer.$on("pass-searchword", result => {
//				this.keyword = result;
//			})
		}
	}
</script>

<style scoped>
	#search {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		background: #fff;
		z-index: 2;
	}
</style>