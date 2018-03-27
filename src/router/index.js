import Vue from 'vue';
import Router from 'vue-router';
import storage from '@/util/storage';
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

Vue.use(Router);

// 路由模块
const router = new Router({
	mode: 'history', //去除#
	// base: '/vue/', // 服务器存放目录，默认/，--开发环境去掉
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/',
			redirect: '/home',
			meta: {requiresAuth: true},
			component: () => import('@/view/layout'),
			children:[
				{
					path: '/home',
					name: '后台首页',
					icon: 'el-icon-menu',
					meta: {requiresAuth: true},
					component: () => import('@/view/home/home')
				},
				{
					path: '/base',
					name: '基础组件',
					icon: 'el-icon-search',
					redirect: '/base/form',
					meta: {requiresAuth: true},
					component: {render (c) { return c('router-view') }},
					children:[
						{
							path: '/base/form',
							name: '表单',
							meta: {requiresAuth: true},
							component: () => import('@/view/base/form')
						},
						{
							path: '/base/table',
							name: '表格',
							meta: {requiresAuth: true},
							component: () => import('@/view/base/table')
						},
						{
							path: '/base/file',
							name: '文件上传',
							meta: {requiresAuth: true},
							component: () => import('@/view/base/file')
						},
					]
				},
				{
					path: '/echarts',
					name: 'Echarts',
					icon: 'el-icon-time',
					redirect: '/echarts/pie',
					meta: {requiresAuth: true},
					component: {render (c) { return c('router-view') }},
					children:[
						{
							path: '/echarts/pie',
							name: '饼图',
							meta: {requiresAuth: true},
							component: () => import('@/view/echarts/pie')
						},
						{
							path: '/echarts/line',
							name: '折线图',
							meta: {requiresAuth: true},
							component: () => import('@/view/echarts/line')
						},
						{
							path: '/echarts/bar',
							name: '柱状图',
							meta: {requiresAuth: true},
							component: () => import('@/view/echarts/bar')
						},
					]
				},
				{
					path: '/editor',
					name: 'Editor',
					icon: 'el-icon-bell',
					redirect: '/editor/markdown',
					meta: {requiresAuth: true},
					component: {render (c) { return c('router-view') }},
					children:[
						{
							path: '/editor/markdown',
							name: 'Markdown',
							meta: {requiresAuth: true},
							component: () => import('@/view/editor/markdown')
						},
						{
							path: '/editor/mavoneditor',
							name: 'MavonEditor',
							meta: {requiresAuth: true},
							component: () => import('@/view/editor/mavoneditor')
						}
					]
				}
			]
		},
		{
			path: '/login',
			// redirect: '/login',
			component: () => import('@/view/login/login')
		},
		// 404
		{
			path: '*',
			hidden: true,
			component: () => import('@/view/error/404')
		}
	]
});

// 路由拦截
// requireLogin： true需要权限，false不需要权限
router.beforeEach((to, from, next) => {
	NProgress.start() // 开启Progress
	
	if (to.matched.some(res => res.meta.requiresAuth)) {
		// 判断是否需要登录权限
		if (storage.getItem("adminUser")) {
			next();
		} else {
			// 没登录则跳转到登录界面
			next({
				path: "/login"
			});
		}
	} else {
		next();
	}
});

router.afterEach(() => {
	NProgress.done() // 结束Progress
});

export default router;