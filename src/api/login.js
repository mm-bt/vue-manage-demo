/*
* @Author: ASUS
* @Date:   2018-03-07 16:19:08
* @Last Modified by:   ASUS
* @Last Modified time: 2018-03-09 16:55:57
*/
import fetch from '@/util/fetch'

// 代理配置
// 开发环境
const TMPURL = '/api';
// 生成环境
// const TMPURL = '';

// 登录
export function login(params) {
	return fetch.post(TMPURL + '/index.php', params);
}

// 统计数据
export function getCount(params) {
	return fetch.get(TMPURL + '/test/count.php', params);
}

// 数据明细
export function getTableList(params) {
	return fetch.get(TMPURL + '/test/index.php', params);
}


