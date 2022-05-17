import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AppHome from "@/components/AppHome";
import AppUsuario from "@/components/Usuario/AppUsuario";
import AppUsuarioList from "@/components/Usuario/AppUsuarioList";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: AppHome,
  },
  {
    path: "/usuario",
    name: "usuario",
    component: AppUsuario,
    children: [
      {
        path: "/",
        name: "usuarioList",
        component: AppUsuarioList,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
