import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
// ADMIN SIDE OF THE ACCOUNT
import AdminView from "../views/Admin/IndexView.vue";
//USER SIDE OF THE ACCOUNT
import UserView from "../views/User/IndexView.vue";
import ProfileView from "../views/User/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/admin",
      name: "adminIndex",
      component: AdminView,
    },
    {
      path: "/user",
      name: "userIndex",
      component: UserView,
    },
    {
      path: "/user/event",
      name: "event",
      component: ProfileView,
    },
    {
      path: "/user/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
