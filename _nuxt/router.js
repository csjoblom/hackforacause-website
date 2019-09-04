import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b6bee798 = () => import('..\\pages\\challenge-submission\\index.vue' /* webpackChunkName: "pages_challenge-submission_index" */).then(m => m.default || m)
const _517810f0 = () => import('..\\pages\\challenges-2018\\index.vue' /* webpackChunkName: "pages_challenges-2018_index" */).then(m => m.default || m)
const _4214c632 = () => import('..\\pages\\challenges-2019\\index.vue' /* webpackChunkName: "pages_challenges-2019_index" */).then(m => m.default || m)
const _470a1db4 = () => import('..\\pages\\conduct\\index.vue' /* webpackChunkName: "pages_conduct_index" */).then(m => m.default || m)
const _113f9814 = () => import('..\\pages\\faq\\index.vue' /* webpackChunkName: "pages_faq_index" */).then(m => m.default || m)
const _d9c56134 = () => import('..\\pages\\meet-our-team\\index.vue' /* webpackChunkName: "pages_meet-our-team_index" */).then(m => m.default || m)
const _7fd0b9f3 = () => import('..\\pages\\schedule\\index.vue' /* webpackChunkName: "pages_schedule_index" */).then(m => m.default || m)
const _3d199c6a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/challenge-submission",
			component: _b6bee798,
			name: "challenge-submission"
		},
		{
			path: "/challenges-2018",
			component: _517810f0,
			name: "challenges-2018"
		},
		{
			path: "/challenges-2019",
			component: _4214c632,
			name: "challenges-2019"
		},
		{
			path: "/conduct",
			component: _470a1db4,
			name: "conduct"
		},
		{
			path: "/faq",
			component: _113f9814,
			name: "faq"
		},
		{
			path: "/meet-our-team",
			component: _d9c56134,
			name: "meet-our-team"
		},
		{
			path: "/schedule",
			component: _7fd0b9f3,
			name: "schedule"
		},
		{
			path: "/",
			component: _3d199c6a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
