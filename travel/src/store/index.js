import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
	state:{
		city:'定位中'
	},
	actions:{
		handleclickCity(ctx,name) {
			ctx.commit('getCityName',name)
		}
	},
	mutations:{
		getCityName(state,name) {
			state.city = name;
		}
	}
})