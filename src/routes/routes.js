import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import DashboardLayout from "../components/layouts/DashboardLayout.vue"
import BlankLayout from "../components/layouts/BlankLayout.vue"

// Pages
import Login from "../components/auth/Login.vue"
import Dashboard from "../components/dashboard/Dashboard.vue"

const routes = [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        layout: BlankLayout,
      }
    },
  
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        layout: DashboardLayout,
      }
    },
]

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  linkExactActiveClass: "nav-item active"
});

export default router;