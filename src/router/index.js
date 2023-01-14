import { createRouter, createWebHistory } from "vue-router";
import RouteView from "../views/route/RouteView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RouteView,
    },
    {
      path: "/route",
      name: "route",
      component: RouteView,
    },
    {
      path: "/station",
      name: "station",
      component: () => import("../views/station/StationView.vue"),
    },
    {
      path: "/performance",
      name: "Performance",
      component:() => import("../views/performance/AmtrakPerformance.vue"),
    }
    
  ],
});

export default router;
