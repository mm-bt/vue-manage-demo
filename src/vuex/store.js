/*
* @Author: ASUS
* @Date:   2018-03-03 11:52:03
* @Last Modified by:   ASUS
* @Last Modified time: 2018-03-08 15:17:26
*/
import Vue from 'vue';
import Vuex from 'vuex';
import storage from '@/util/storage';

Vue.use(Vuex);

// 创建基本状态
const state = {
	adminer: storage.getItem('adminUser') || '' //登陆管理员
}

// 创建改变状态的方法
const mutations={
	// 管理员登录
	ADMINLOGIN (state) {
		state.adminer = storage.getItem('adminUser');
	},
	// 管理员退出
	ADMINLOGOUT (state) {
		state.adminer = '';
		storage.removeItem('adminUser');
	}
}

// getters
const getters = {
	// count:function(state){
	//  return state.count +=100;
	// }
}

// 创建驱动actions可以使得mutations得以启动
const actions ={
	// 管理员登录
	adminlogin ({commit}) {
		commit('ADMINLOGIN')
	},
	// 管理员登录
	adminlogout ({commit}) {
		commit('ADMINLOGOUT')
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});

export default store;
