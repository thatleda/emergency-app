import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'waitingroom',
        name: 'WaitingRoom',
        component: () =>
          /* webpackChunkName: "WaitingRoom" */ import(
            'pages/WaitingRoomPage.vue'
          ),
      },
      {
        path: 'symptomchecker',
        name: 'SymptomChecker',
        component: () =>
          /* webpackChunkName: "SymptomChecker" */ import(
            'pages/SymptomCheckerPage.vue'
          ),
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
