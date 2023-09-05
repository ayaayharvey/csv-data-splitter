import _ from "lodash";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Dashboard",
          icon: "dashboard",
        },
      },
      // {
      //   path: "/areas",
      //   component: () => import("pages/area/AreaList.vue"),
      //   meta: {
      //     requiresAuth: true,
      //     title: "Areas",
      //     icon: "assistant_navigation",
      //   },
      // },
    ],
  },
  // {
  //   path: "/login",
  //   component: () => import("pages/login/LoginPage.vue"),
  //   meta: {
  //     loginPage: true,
  //   },
  // },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

export const pickRoutes = (paths) => {
  const rootPaths = _.find(routes, (r) => r.path === "/").children;

  return _.filter(rootPaths, (x) => _.includes(paths, x.path));
};

// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/IndexPage.vue') }
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue')
//   }
// ]
// export default routes
