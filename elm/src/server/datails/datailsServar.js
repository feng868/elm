import axios from "axios";
import api from "../../api";
import handleImg from "../../manage/handleImgPath.js";

export function getDetailsMenu(id) {
	return new Promise((resolve, reject) => {
		axios.get(api.DETAIKS_MENU, {
				params: {
					restaurant_id: id
				}
			})
			.then(response => {

				let arr = response.data.map(item => {
					return {
						name: item.name,
						grey_icon_url: item.grey_icon_url,
						foods: item.foods

					}
				})
				let arr1 = arr.map(item => {
					return {
						foods: item.foods
					}
				})
				let arr2 = [];
				for(var i = 0; i < arr1.length; i++) {
					for(var j = 0; j < arr1[i].foods.length; j++) {
						arr2.push(arr1[i].foods[j])
					}
				}
				let arr3 = arr2.map(item => {
					return {
						food_name: item.name,
						satisfy_rate: item.satisfy_rate,
						month_sales: item.month_sales,
						specfoods: item.specfoods,
						image_path: handleImg(item.image_path, 140)
					}
				})
				resolve([arr, arr3])

			})
			.catch(error => {
				console.log(error)
			})
	})
}

export function getEcaluateData(id) {
	return new Promise((resolve, reject) => {
		axios.get(api.EVALUATE_DATA + id + "/ratings", {
			params: {
				has_content: true,
				offset: 0,
				limit: 8
			}
		})
		.then(response=>{
			let arr=response.data.map(item=>{
				return{
					rating_text:item.rating_text,
					username:item.username,
					time_spent_desc:item.time_spent_desc,
					rating:item.rating,
					food_ratings:item.food_ratings,
					time:item.rated_at
				}
			})
			resolve(arr)
		})
		.catch(error=>{
			console.log(error)
		})
	})
}