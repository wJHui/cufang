import Vue from 'vue'
import Router from 'vue-router'

import HomeVue from '../views/HomeVue'
import PageVue from '../views/PageVue'
import HeadVue from '../views/HeadVue'
import FootVue from '../views/FootVue'

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
    			components : {
                    default : HomeVue,
                    header : HeadVue,
                    footer : FootVue,
                }
    		},
            {
                path : '',
                redirect : '/page/home'
            }
    	]
    }
  ]
})
