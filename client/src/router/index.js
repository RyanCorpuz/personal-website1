import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta: {title: 'Home'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	meta: {title: 'About'}
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
	meta: {title: 'Projects'}
  },
  {
    path: '*',
    name: 'Not Found',
	redirect: '/'
  },
//  {
//    path: '/demos/dashdemo',
//    name: 'Dashboard Demo',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/demos/DashboardDemo.vue'),
//	meta: {title: 'Dashboard Demo'}
//  },
]

const router = new VueRouter({
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	mode: 'history'
})

export default router
