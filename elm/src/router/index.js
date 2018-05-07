import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//首页
import home from "../moudel/content/home/home.vue";
import findbusiness from "../moudel/content/Search/findbusiness.vue";
import discover from "../moudel/content/discover/discover.vue";
import indent from "../moudel/content/indent/indent.vue";
import mine from "../moudel/content/mine/mine.vue";

//商家详情
import details from "../moudel/content/details/details.vue";
import evaluate from "../components/defails/evaluate.vue";
import merchant from "../components/defails/merchant.vue";
import order from "../components/defails/order.vue";
//定位
import Location from "../moudel/content/home/location.vue";
//搜索
import Shop from "../moudel/content/Search/shop.vue";

export default new Router({

	routes: [{
			path: "/home",
			component: home,
			children: [{
				path: "location",
				component: Location,
				name: "location"
			}]
		},
		{
			path: "/findbusiness",
			component: findbusiness,
			children: [{
				path: "shop",
				component: Shop,
				name: "shop"
			}]
		}, {
			path: "/details",
			component: details,
			children: [{
				path: "evaluate",
				component: evaluate,
				name: "evaluate"
			}, {
				path: "merchant",
				component: merchant,
				name: "merchant"
			}, {
				path: "order",
				component: order,
				name: "order"
			}]
		},
		{
			path: "/discover",
			component: discover
		},
		{
			path: "/indent",
			component: indent
		}, {
			path: "/mine",
			component: mine
		}, {
			path: "/",
			redirect: '/home'
		}, {
			path: '**',
			redirect: '/home'
		}
	]
})