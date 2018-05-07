<template>
	<section class="timeLimit">
		<section class="timeLimit_title">
			<h3>限时好礼</h3>
			<p>金币换豪礼</p>
		</section>
		<section class="timeLimit_shop">
			<dl v-for="(item,index) in data" v-if="index<3">
				<dt>
					<span>{{item.corner_marker}}</span>
					<img :src="item.image_hash"/>
				</dt>
				<dd>
					<p>{{item.title}}</p>
					<p><span>{{item.points_required}}金币</span><i><s>￥{{item.original_price}}</s></i></p>

				</dd>
			</dl>
		</section>
		<section class="more">
			<a href="##">查看更多</a>
		</section>
	</section>
</template>

<script>
	import { getTimeLimitData } from "../../server/discover/DiscoverServer.js"
	export default {
		name: "time-limit",
		data() {
			return {
				data: null
			}
		},
		created() {
			getTimeLimitData()
				.then(result => {
					this.data = result;
				})
		}
	}
</script>

<style scoped>
	.timeLimit {
		width: 100%;
		height: 100%;
		background: #eee;
		border-top: 1px solid #eee;
	}
	
	.timeLimit .timeLimit_title {
		margin-top: 0.07rem;
		text-align: center;
		height: 0.53rem;
		background: #fff;
	}
	
	.timeLimit .timeLimit_title h3 {
		padding-top: 0.17rem;
		font-size: 0.15rem;
		font-weight: bold;
		color: #000;
	}
	
	.timeLimit .timeLimit_title p {
		font-size: 0.1rem;
	}
	
	.timeLimit .timeLimit_shop {
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.1rem 0 0.12rem 0.13rem;
	}
	
	.timeLimit .timeLimit_shop img {
		height: .94rem;
		width: .94rem;
	}
	
	.timeLimit .timeLimit_shop dd p:nth-child(1) {
		font-size: 0.11rem;
		color: #333;
	}
	
	.timeLimit .timeLimit_shop dl {
		position: relative;
	}
	
	.timeLimit .timeLimit_shop dt span {
		position: absolute;
		background: #413d3c;
		color: #FFF;
		font-size: 0.09rem;
		padding: 0.02rem;
	}
	
	.timeLimit .timeLimit_shop dd p:nth-child(2) span {
		font-size: 0.08rem;
		color: #ff5339;
	}
	
	.more {
		height: 0.41rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		margin-bottom: 0.15rem;
	}
	.more a{
		color: #999;
	}
</style>