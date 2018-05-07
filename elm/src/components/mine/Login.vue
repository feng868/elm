<template>
	<div class="login">
		<div class="mine_login">
			<span class="login_tx"><svg>
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default">
						<svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
							<path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path>
						</svg>
					</use>
				</svg>
				</span>
			<div>
				<p>登录/注册</p>
				<p>
					<svg class="login_tel" fill="#fff">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile">
							<svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%">
								<path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path>
							</svg>
						</use>
					</svg>
					<span class="tq">登录后享受更多特权</span></p>
			</div>
			<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
		</div>
		<section class="list">
			<a href="##">
				<i class="iconfont icon-qian"></i>
				<span>钱包</span>
			</a>
			<a href="##">
				<i class="iconfont icon-icon--"></i>
				<span>红包</span>
			</a>
			<a href="##">
				<i class="iconfont icon-jinbi">
					
				</i>
				<span>金币</span>
			</a>
		</section>
	</div>
</template>

<script>
	export default {
		name: "login-com"
	}
</script>

<style scoped>
	.login{
		background: #fff;
	}
	.mine_login {
		width: 100%;
		height: .94rem;
		background-image: linear-gradient(90deg, #0af, #0085ff);
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.mine_login .login_tx>svg {
		width: .51rem;
		height: .51rem;
		background: #fff;
		border-radius: 50%;
	}
	.mine_login .tq{
		font-size: 0.10rem;
	}
	.mine_login .login_tel {
		width: 0.1rem;
		height: 0.12rem
	}
	
	.mine_login div {
		width: 2.16rem;
		color: #fff;
	}
	
	.mine_login div>p:nth-child(1) {
		font-size: .18rem;
		font-weight: bold;
	}
	
	.mine_login i {
		color: #fff;
		font-size: 0.09rem;
	}
	
	.login .list {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.login .list a {
		width: 33.3333%;
		height: .70rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction:column;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.login .list a:nth-child(3){
		border-right: 0;
	}
	.login .list a i{
		width: .22rem;
		height:.22rem;
		border-radius: 50%;
		background:orange;
		font-size: 0.11rem;
		text-align: center;
		line-height: .22rem;
		color: #fff;
	}
	.login .list a:nth-child(2) i{
		background: red;
	}
	.login .list a:nth-child(3) i{
		background: limegreen;
	}
</style>