import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Member from './views/Member.vue'
import Shopcart from './views/Shopcart.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/member',
			name: 'member',
			component: Member
		},
		{
			path: '/shopcart',
			name: 'shopcart',
			component: Shopcart
		},
		{
			path: '/search',
			name: 'search',
			component: Search
		}, {
			path: '/news/list',
			name: 'newsList',
			component: () => import('./views/NewsList.vue')
		},
		{
			path: '/news/detail/:id',
			name: 'newsDetail',
			component: () => import('./views/NewsDetail.vue')
		},
		{
			path: '/photo/list',
			name: 'photoList',
			component: () => import('./views/PhotoList.vue')
		}
	]
})
