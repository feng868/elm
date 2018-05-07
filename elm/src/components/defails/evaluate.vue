<template>
	<section>
		<section class="evaluate">
			<div>
				<strong>5.0</strong>
				<p>综合评价</p>
				<p>高于家84.2%</p>
			</div>
			<div>
				<div>
					<span>服务态度</span>
					<p>ssss
					</p>
				</div>
				<div>
					<span>菜品评价</span>
					<p>ssss</p>
				</div>
				<div>
					<span>送达时间</span>
					<p>ssss</p>
				</div>
			</div>

		</section>
		<section class="evaluate-list">
			<section></section>
			<ul>
				<li v-for="item in data">
					<div></div>
					<div>
						<p>
							<span>{{item.username}}</span>
							<span>{{item.time}}</span>
						</p>
						<p>
							<span>{{item.rating}}</span>
							<span>{{item.time_spent_desc}}</span></p>
						<p>
							<span>{{item.rating_text}}</span>

							<p>
								<span v-for="name in item.food_ratings">{{name.rate_name}}</span>
							</p>
					</div>
				</li>
			</ul>
		</section>
	</section>
</template>

<script>
	import { getEcaluateData } from "../../server/datails/datailsServar.js"
	export default {
		name: "evaluate-com",
		data() {
			return {
				data: null
			}
		},
		created() {
			getEcaluateData(155686820)
				.then(result => {
					this.data = result;
					console.log(this.data)
				})
		}

	}
</script>

<style scoped>
	.evaluate {
		display: flex;
		justify-content: space-around;
		margin-top: 0.2rem;
	}
	
	.evaluate>div:nth-child(1) {
		width: 0.95rem;
		margin-right: 0.10rem;
		text-align: center;
		line-height: 0.2rem;
	}
	
	.evaluate>div:nth-child(2) {
		width: 2.06rem;
	}
	
	.evaluate>div:nth-child(2) div {
		display: flex;
		height: 0.2rem;
		line-height: 0.2rem;
	}
	
	.evaluate-list {
		display: flex;
	}
	
	.evaluate-list>section {
		width: 0.38rem;
		height: 1.21rem;
	}
	
	.evaluate-list ul li {
		height: 1.21rem;
		padding: 0.1rem 0;
	}
	
	.evaluate-list ul li div:nth-child(2) p:nth-child(4) span {
		width: 0.69rem;
		display: inline-block;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>