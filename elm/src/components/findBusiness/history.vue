<template>
	<section class="history">
		<header class="clear">
			<span>历史搜索</span>
			<section class="clean">
				<svg>
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bin">
						<svg viewBox="0 0 512 512" id="bin" width="100%" height="100%">
							<path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z"></path>
						</svg>
					</use>
				</svg>
			</section>
		</header>
		<section class="history_list">
			<i v-for="(item,index) in data" @click="searchWord(index)" ref="hotSarch">{{item}}</i>
		</section>
	</section>
</template>

<script>
	export default {
		name: "history-com",
		data() {
			return {
				data: null
			}
		},
		methods: {
			searchWord(index) {
				this.$router.push({
					path: '/findbusiness/shop',
					query: {
						keyword: this.$refs.hotSarch[index].innerText
					}
				})
			}
		},
		mounted() {
			if(localStorage.SEARCH_HISTORY) {
				this.data = JSON.parse(localStorage.SEARCH_HISTORY);
			}

		},
		created() {

		}

	}
</script>

<style scoped>
	.history header {
		height: .3rem;
		line-height: .3rem;
	}
	
	.history header span {
		float: left;
		margin-left: 0.12rem;
		font-size: 0.14rem;
		font-weight: bold;
	}
	
	.clean svg {
		width: 0.1rem;
		height: 0.1rem;
		margin-top: .1rem;
		float: right;
		margin-right: 0.12rem;
		color: #cecece;
		fill: currentColor
	}
	
	.history_list {
		min-height: .5rem;
		padding: 0rem 0.12rem 0.12rem;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		flex-wrap: wrap;
		margin-top: 0.1rem;
	}
	
	.history_list i {
		padding: 0.06rem 0.1rem;
		display: inline-block;
		color: #666;
		background-color: #f7f7f7;
		margin-right: 0.1rem;
		margin-bottom: 0.1rem;
		border-radius: 0.02rem;
	}
</style>