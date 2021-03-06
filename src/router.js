import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ShowcaseDetails from "./views/ShowcaseDetails";
import Overview from "./views/Overview.vue";
import Products from "./views/Products.vue";
import Orders from "./views/Orders.vue";
import Profile from "./views/Profile.vue";
import BrandShowcase from "./views/BrandShowcase.vue";
import { fb } from "./firebase.js";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '*', 
      name: 'notfound',
      component: NotFound
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: Products
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        }
      ]
    },
    {
      path: "/author",
      name: "author",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Author.vue")
    },
    {
      path: "/:brand",
      name: "BrandShowcase",
      component: BrandShowcase,
      props: true
    },
    {
      path: "/:brand/:title",
      name: "ShowcaseDetails",
      component: ShowcaseDetails,
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
