<template>
	<section class="serve">
		<section class="mine_address">
			<i class="iconfont icon-dingwei1"></i>
			<span>我的地址</span>
			<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
		</section>
		<section class="mine_active">
			<section>
				<i class="iconfont icon-fenqishangcheng1"></i>
				<span>金币商城</span>
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</section>
			<section>
				<i class="iconfont icon-lipintianchong"></i>
				<span>分享那5元现金</span>
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</section>
		</section>
		<section class="mine_server">
			<section>
				<i class="iconfont icon-msnui-service-call"></i>
				<span>我的客服</span>
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</section>
			<section>
				<i class="iconfont icon-changyonglogo40"></i>
				<span>下载饿了么App</span>
				<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
			</section>
		</section>
	</section>
</template>

<script>
	export default {
		name: "serve-com"
	}
</script>

<style scoped>
	.serve {
		line-height: 0.38rem;
		color: #666;
		font-size: 0.14rem;
	}
	
	.serve span {
		width: 2.4rem;
	}
	
	.icon-arrow-right-copy-copy-copy {
		font-size: 0.12rem;
	}
	
	.mine_address {
		margin-top: .1rem;
		background: #fff;
		height: .38rem;
		display: flex;
		justify-content: space-around;
	}
	
	.mine_active {
		margin-top: .1rem;
		height: .78rem;
		background: #fff;
	}
	
	.mine_active section:nth-child(1) {
		border-bottom: 1px solid #eee;
	}
	
	.mine_active section {
		height: .39rem;
		display: flex;
		justify-content: space-around;
	}
	
	.mine_server {
		margin-top: .1rem;
		height: .78rem;
		background: #fff;
	}
	
	.mine_server section:nth-child(1) {
		border-bottom: 1px solid #eee;
	}
	
	.mine_server section {
		height: .39rem;
		display: flex;
		justify-content: space-around;
	}
	.icon-dingwei1{
		color:#0af;
	}
	.icon-fenqishangcheng1{
		color: limegreen;
	}
	.icon-lipintianchong{
		color: #FF5339
	}
	.icon-msnui-service-call{
		color:#0af;
	}
	.icon-changyonglogo40{
		color:#0af;
	}
</style>