//处理发现页网络请求

import axios from "axios";
import api from "../../api";
import handleImg from "../../manage/handleImgPath.js";

export function DiscoverActionData() {
	return new Promise((resolve, reject) => {
		axios.get(api.DISCOVER_ACYIVE, {
				params: {
					platform: 1,
					block_index: 0
				}
			})
			.then(response => {
				let arr = response.data["1"].map(item => {
					return {
						title: item.title,
						subtitle: item.subtitle,
						title_color: item.title_color,
						main_pic_hash: handleImg(item.main_pic_hash),
						content_url: item.content_url
					}
				})
				resolve(arr)
			})
			.catch(error => {
				console.log(error)
			})
	})

}

export function getTimeLimitData() {
	return new Promise((resolve, reject) => {
		axios.get(api.DISCOVER_TIMELIMIT, {})
			.then(response => {
				let arr = response.data.map(item => {
					return {
						title: item.title,
						corner_marker: item.corner_marker,
						original_price: item.original_price,
						points_required: item.points_required,
						image_hash: handleImg(item.image_hash),
						url: item.url
					}
				})
				resolve(arr)
			})
			.catch(error => {
				console.log(error)
			})
	})
}