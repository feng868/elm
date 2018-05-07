//处理首页网络请求

import axios from "axios";
import api from "../../api";
import handleImg from "../../manage/handleImgPath.js";
//获取搜索的地址信息
export function getSearchAddress(keyword, lat, lon) {
	return new Promise((resolve, reject) => {
		axios.get(api.SEARCH_ADDRESS, {
				params: {
					keyword: keyword,
					offset: 0,
					limit: 20,
					latitude: lat,
					longitude: lon
				}
			})
			.then(response => {
				resolve(response);
			})
			.catch(error => {
				console.log(error);
			})
	})
}

//获取当前地址信息
export function getNowAddress(lat, lon) {
	return new Promise((resolve, reject) => {
		axios.get(api.NOW_ADDRESS, {
				params: {
					latitude: lat,
					longitude: lon
				}
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				console.log(error);
			})
	})
}
//获取商家搜索信息

export function getBusinessData(keyword, lat, lon, cityId) {
	return new Promise((resolve, reject) => {
		axios.get(api.BUSINESS_SEARCH, {
				params: {
					kw: keyword,
					latitude: lat,
					longitude: lon,
					city_id: cityId
				}
			})
			.then(response => {
				let search_word = response.data.words;
				let arr = response.data.restaurants.map(item => {
					return {
						image_path: handleImg(item.image_path, 24),
						name: item.name,
						rating: item.rating,
						tags: item.tags,
						search_word: item.search_word
					}
				})
				resolve([arr, search_word])
			})
			.catch(error => {
				console.log(error);
			})
	})
}
//获取热门搜索信息

export function getHotSearchData(lat, lon) {
	return new Promise((resolve, reject) => {
		axios.get(api.HOT_SEARCH, {
				params: {
					latitude: lat,
					longitude: lon
				}
			})
			.then(response => {

				let arr = response.data.map(item => {
					return {
						word: item.word
					}
				})
				resolve(arr)
			})
			.catch(error => {
				console.log(error);
			})
	})
}

//取得商家分类信息

export function getShopsData(lat, lon, templates) {
	return new Promise((resolve, reject) => {
		axios.get(api.SHOPS_DATAS, {
				params: {
					latitude: lat,
					longitude: lon,
					templates: templates
				}
			})
			.then(response => {

				response = response.data[0].entries;
				//遍历数据将不需要的数据排除，留下需要的数据，减少数据请求大小

				let arr = response.map(item => {
					return {
						id: item.id,
						ImgPath: handleImg(item.image_hash, 90),
						name: item.name
					}
				})

				//将数据切割成数组，十个分为一组
				let data = [];
				//当response的长度小于0的时候，将停止判断
				while(arr.length > 0) {
					data.push(arr.splice(0, 10))
				}

				resolve(data);

			})
			.catch(error => {
				console.log(error);
			})
	})
}

//获取到商家推荐信息

export function getBusiness(lat, lon, offset, limit) {
	return new Promise((resolve, reject) => {
		axios.get(api.BUSINESS, {
				params: {
					latitude: lat,
					longitude: lon,
					offset: offset,
					limit: limit,
					extras: ["activities", 'tags'],
					extra_filters: ["home"],
					terminal: "h5"
				}
			})
			.then(response => {
				let arr = response.data.items.map(item => {
					return {
						name: item.restaurant.name,
						delivery_fee: item.restaurant.float_delivery_fee,
						price: item.restaurant.float_minimum_order_amount,
						time: item.restaurant.order_lead_time,
						active: item.restaurant.activities,
						rating: item.restaurant.rating,
						ImgPath: handleImg(item.restaurant.image_path, 130),
						distance: item.restaurant.distance,
						recent_order_num: item.restaurant.recent_order_num,
						brand: item.restaurant.is_premium,
						recommend: item.restaurant.recommend,
						publicPath: handleImg(item.restaurant.recommend.image_hash, 60),
						isShow: false,
						id:item.restaurant.id

					}
				})
				resolve(arr)
			})
			.catch(error => {
				console.log(error)
			})
	})
}

//获取到搜索商品分类信息

export function getBusinessPageData(lat, lon, offset, limit, keyword, search_item_type) {
	return new Promise((resolve, reject) => {
		axios.get(api.BUSINESS_PAGES, {
				params: {
					offset: offset,
					limit: limit,
					keyword: keyword,
					latitude: lat,
					longitude: lon,
					search_item_type: search_item_type,
					is_rewrite: 1,
					extras: ["activities", "coupon"],
					terminal: "h5"
				}
			})

			.then(response => {

				let arr = response.data.inside["0"].restaurant_with_foods.map(item => {
					return {
						name: item.restaurant.name,
						delivery_fee: item.restaurant.float_delivery_fee,
						price: item.restaurant.float_minimum_order_amount,
						time: item.restaurant.order_lead_time,
						active: item.restaurant.activities,
						rating: item.restaurant.rating,
						ImgPath: handleImg(item.restaurant.image_path, 130),
						distance: item.restaurant.distance,
						recent_order_num: item.restaurant.recent_order_num,
						brand: item.restaurant.is_premium,
						recommend: item.restaurant.recommend,
						publicPath: handleImg(item.restaurant.recommend.image_hash, 60),
						isShow: false,
						id:item.restaurant.id,

					}
				})
				console.log(response)
				resolve(arr)
			})
			.catch(error => {
				console.log(error)
			})
	})
}

//获取到商品详情信息

export function getBusinessDetailsData(lat, lon) {
	return new Promise((resolve, reject) => {
			axios.get(api.SELLER_DETALIS, {
//					params: {
//						extras: ["activities", "albums", "license", "identification", "qualification"],
//						terminal: "h5",
//						latitude: lat,
//						longitude: lon
//					}
				})

				.then(response => {

					let arr = {
						name: response.data.name,
						delivery_fee: response.data.float_delivery_fee,
						price: response.data.float_minimum_order_amount,
						time: response.data.order_lead_time,
						active: response.data.activities,
						rating: response.data.rating,
						ImgPath: handleImg(response.data.image_path, 130),
						distance: response.data.distance,
						recent_order_num: response.data.recent_order_num,
						brand: response.data.is_premium,
						recommend: response.data.recommend,
						publicPath: handleImg(response.data.recommend.image_hash, 60),
						promotion_info:response.data.promotion_info,
						isShow: false
					}
			resolve(arr)
		})
		.catch(error => {
			console.log(error)
		})
})
}