
const routes = [
  {
    path: '/',
    component: () => import('layouts/AccountForm.vue'),
    children: [
      {
        path: 'Account',
        component: () =>
            import ('pages/PageAccount.vue')
    },
    ]
  },

  {
    path: '/SubForm',
    component: () =>
        import ('layouts/AccountForm'),
    children: [
        // {
        //     path: '/',
        //     component: () =>
        //         import ('pages/PageSchedule.vue')
        // },
        // {
        //     path: 'Schedule',
        //     component: () =>
        //         import ('pages/PageSchedule.vue')
        // },
        {
            path: 'Account',
            component: () =>
                import ('pages/PageAccount.vue')
        },
    ]
},


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
