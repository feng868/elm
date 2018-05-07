<template>
	<div class="indent">
		<header-com title="订单"></header-com>
	<content-com :canroll="false" :canRefresh="false" class="idt">
		<section class="noLg">
			<img src="../../../../static/images/indent.png" />
			<h3>登录后查看外卖订单</h3>
			<button>立即登录</button>
		</section>
	</content-com>
	</main>
	</div>
</template>

<script>
</script>

<style scoped>
	.idt{
		background: #eee;
	}
	.noLg{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.noLg img{
		width: 100%;
		height: 100%;
	}
	.noLg button{
		width: 1.02rem;
		height: .36rem;
		border: 0;
		background:#56d176;
		color: #fff;
		font-size: .14rem;
		margin-top: .1rem;
		outline: none;
	}
</style>