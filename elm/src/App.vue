<template>
	<div id="app" class="clear">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<bottom></bottom>
	</div>
</template>

<script>
	import footer from "./moudel/commond/footer.vue";
	import Vuex from "vuex";

	export default {
		name: 'App',
		components: {
			bottom: footer
		},
		methods: {
			...Vuex.mapActions({
				getLoaction: "location/getLocation"
			})
		},
		created() {
			this.getLoaction()
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>