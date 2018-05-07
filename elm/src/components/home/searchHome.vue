<template>
	<section class="search">
		<i class="iconfont icon-49"></i>
		<router-link to="/findbusiness">搜索饿了么商家、商品名称</router-link>
	</section>
</template>
<script>
	export default {
		name: "search-com",
		mounted() {

		}
	}
</script>

<style scoped>
	.search {
		position: relative;
		height: 0.44rem;
		width: 100%;
		background-image: linear-gradient(90deg, #0af, #0085ff);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}
	
	.search i {
		position: absolute;
		left: .7rem;
		font-size: .12rem;
		color: #999;
	}
	
	.search a {
		width: 2.96rem;
		height: 0.30rem;
		background: #fff;
		display: block;
		text-align: center;
		line-height: .3rem;
		color: #999;
	}
</style>