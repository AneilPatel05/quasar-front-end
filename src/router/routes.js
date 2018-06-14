
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        component: () => import('pages/index')
      },
      {
        path: '/login',
        component: () => import('pages/Login')
      },
      {
        path: '/register',
        component: () => import('pages/Register')
      },
      {
        path: '/secured',
        component: () => import('pages/Secured')
      }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
