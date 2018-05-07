<template>
	<section id="tab" class="one-bottom-px">
		<ul>
			<li v-for="(item,index) in fullpath" @click="active(index)" ref="ali">
				<router-link :to="item.path">{{item.title}}</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: "detailsTab-com",
		data() {
			return {
				fullpath: [{
						title: "点餐",
						path: "/details?id=155686820"
					},
					{
						title: "评价",
						path: "/details/evaluate"
					},
					{
						title: "商家",
						path: "/details/merchant"
					}
				]

			}
		},
		methods: {
			active(index) {
				for(let i = 0; i < this.$refs.ali.length; i++) {
					this.$refs.ali[i].className = "";
				}
				this.$refs.ali[index].className = "active";
				//跳转
				this.$emit("pass-index", index)

			}
		}
	}
</script>

<style scoped>
	#tab {
		height: 0.35rem;
	}
	
	#tab ul {
		display: flex;
		height: 0.35rem;
		justify-content: space-around;
		align-items: center;
	}
	
	#tab ul li {
		height: 0.35rem;
		line-height: 0.35rem;
		border-bottom: .02rem solid #fff;
		box-sizing: border-box;
	}
	
	#tab ul li a {
		color: #000;
	}
	
	#tab ul .active {
		border-bottom: .02rem solid #00AAFF;
	}
</style>