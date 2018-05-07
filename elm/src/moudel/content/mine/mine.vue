<template>
	<div id="mime">
		<header-com title="我的"></header-com>
		<content-com :canroll="false" :canRefresh="false"class="my">
			<login-com></login-com>
			<serve-com></serve-com>
		</content-com>
	</div>
</template>

<script>
	import Login from "../../../components/mine/Login.vue"
	import Serve from "../../../components/mine/serve.vue"
	export default {
		name: "mine-com",
		components: {
			[Login.name]: Login,
			[Serve.name]: Serve
		}
	}
</script>

<style scoped>
.my{
	background: #eee;
}
</style>