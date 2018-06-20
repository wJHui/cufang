import Vue from 'vue'
import Router from 'vue-router'

import HomeVue from '../views/HomeVue'
import PageVue from '../views/PageVue'
import ShareVue from '../views/ShareVue'

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
    			name : 'home',
    			component : HomeVue
    		},
    		{
    			path : 'share',
    			name : 'share',
    			component : ShareVue
    		},
            {
                path : '',
                redirect : '/page/home'
            }
    	]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})
