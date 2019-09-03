import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/utils-status-statistics',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'utils-status-statistics',
        component: () => import('@/views/utilsStatusStatistics/index'),
        meta: { title: '工具状况统计', icon: 'chart' }
      }
    ]
  },

  {
    path: '/commit-util',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'commit-util',
        component: () => import('@/views/commitUtil/index'),
        meta: { title: '工具提交', icon: 'edit' }
      }
    ]
  },

  {
    path: '/util-box',
    component: Layout,
    redirect: '/util-box/cssBox',
    name: 'util-box',
    meta: { title: '工具箱', icon: 'skill' },
    children: [
      {
        path: 'cssBox',
        name: 'cssBox',
        component: () => import('@/views/utilBox/cssBox'),
        meta: { title: 'CSS工具箱', icon: 'skill' },
        children: [
          {
            path: 'info-detail',
            name: 'info-detail',
            hidden: true,
            component: () => import('@/views/utilBox/uitls/infoDetail'),
            meta: { title: 'info-detail' }
          }
        ]
      },
      {
        path: 'testBox',
        name: 'testBox',
        component: () => import('@/views/utilBox/testBox'),
        meta: { title: '测试工具箱', icon: 'skill' }
      }
    ]
  },

  {
    path: '/commit-problem',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'commit-problem',
        component: () => import('@/views/commitProblem/index'),
        meta: { title: '遇到的坑', icon: 'form' }
      }
    ]
  },

  {
    path: '/problems',
    name: 'problems',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: '爬坑记', icon: 'education' },
    children: [
      {
        path: 'elementProblems',
        name: 'elementProblems',
        component: () => import('@/views/problems/elementProblems'),
        meta: { title: 'element遇到的坑', icon: 'education' }
      },
      {
        path: 'iviewProblems',
        name: 'iviewProblems',
        component: () => import('@/views/problems/iviewProblems'),
        meta: { title: 'iview遇到的坑', icon: 'education' }
      }
    ]
  },

  {
    path: '/help',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'help',
        component: () => import('@/views/help/index'),
        meta: { title: '帮忙', icon: 'documentation' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
