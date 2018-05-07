const state = {
	locValue: {
		latitude: null,
		longitude: null,
		city_id:null
		
	}
}

const mutations = {
	modifyLocation(state, params){
		state.locValue = params;
	}
}

const actions = {
	getLocation(context){
		//执行h5的定位
		setTimeout(()=>{
			context.commit('modifyLocation', {
				longitude: '113.837884',
				latitude: '22.626024',
				city_id:11
			})
		}, 1000);
	},
	//用户修改地址
	userSelectLocation(context, params){
		context.commit('modifyLocation', params);
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}