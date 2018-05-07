<template>
	<section class="active">
		<section class="clear">
			<a href="##" v-for="item in data" >
				<section>
				<p :style="{color: item.title_color}">{{item.title}}</p>
				<p class="ms">{{item.subtitle}}</p>
				</section>
				<img :src="item.main_pic_hash"/>
			</a>
		
		</section>
	</section>
</template>

<script>
	import { DiscoverActionData } from "../../server/discover/DiscoverServer.js"
	export default {
		name: "active-com",
		data() {
			return {
				data: null
			}
		},
		methods: {

		},
		created() {
			DiscoverActionData()
				.then(result => {
					this.data = result;
				})
		},
	}
</script>

<style scoped>
	.active {
		width: 100%;
		height: 100%;
	}
	.active>section{
		position: relative;
	}
	.active a{
		display: inline-block;
		
		color: #999;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EDEDED;
				
	}
	.active .ms{
		font-size: 0.10rem;
		margin-top: 0.05rem;
	}
	.active a img{
		width: .38rem;
		height: .38rem;
		
	}
	.active a:nth-child(1) {
		position: absolute;
		width: 50%;
		height: 1.36rem;
		box-sizing: border-box;
		padding: 0.19rem 0rem 0rem 0.14rem;
		border-right: 1px solid #EDEDED;
	}
	.active a:nth-child(1)>section{
		height: 1.12rem;
	}
	.active a:nth-child(1) img{
		width: 0.64rem;
		height: .64rem;
		position: absolute;
		right: .1rem;
		bottom: 0.05rem;
	}
	.active a:nth-child(2) ,a:nth-child(3)  {
		width: 50%;
		height:0.68rem;
		box-sizing: border-box;
		padding: 0rem 0.13rem;
		margin-left:50%;
		
	}
	.active a:nth-child(3) {
		top:0.68rem;
		
	}
	.active a:nth-child(4) {
		width: 50%;
		height:0.68rem;
		box-sizing: border-box;
		padding: 0rem 0.13rem;
		border-right: 1px solid #EDEDED;
		float: left;
	
	}
	.active a:nth-child(5) {
		width: 50%;
		height:0.68rem;
		box-sizing: border-box;
		padding: 0rem 0.13rem;
		margin-left:50%;
	}
</style>