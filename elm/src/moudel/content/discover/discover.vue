<template>
	<div id="discover">
		<header-com title="发现"></header-com>
		<content-com :canroll="false" :canRefresh="false">
			<section class="banner">
				<a href="##">
					<img src="../../../../static/images/find.gif" />
				</a>
			</section>
			<active-com>
				
			</active-com>
			<time-limit></time-limit>
		</content-com>
	</div>
</template>

<script>
	import Active from "../../../components/discover/active.vue"
	import TimeLimit from "../../../components/discover/TimeLimit.vue"
	export default{
		name:"discover-com",
		components:{
			[Active.name]:Active,
			[TimeLimit.name]:TimeLimit
		}
	}
</script>

<style scoped>
	#discover{
		
	}
	.banner{
		width:100%;
		height: 1.12rem;
	}
	.banner>a>img{
		width:100%;
		height: 1.12rem;
	}
</style>