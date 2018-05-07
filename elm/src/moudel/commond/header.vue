<template>
	<header id="header">

		<p>
			<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			<span>{{title}}</span>
		</p>
	</header>
</template>

<script>
	export default {
		name: "header-com",
		props: {
			title: String
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
	}
	
	#header p {
		text-align: center;
		line-height: 0.4rem;
		font-size: 0.15rem;
		font-weight: bold;
		color: #fff;
	}
	
	#header i {
		position: absolute;
		left: .12rem;
		float: left;
		transform: rotate(180deg);
	}
</style>