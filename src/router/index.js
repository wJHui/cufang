import Vue from 'vue'
import Router from 'vue-router'

import HomeVue from '../views/HomeVue'
import PageVue from '../views/PageVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	redirect : '/page'
    },
    {
    	path : '/page',
    	component : PageVue,
    	children : [
    		{
    			path : 'home',
    			component : HomeVue
    		}
    	]
    }
  ]
})
