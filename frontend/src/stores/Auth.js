import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { responseMessage } from "./Response";
import { redirectTo } from "./Redirect";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUserCredentials: ref({
      email: "",
      password: "",
      remember: false,
    }),
    authUserRegistration: ref({
      id: null,
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
    }),
    authUserData: ref([]),
    authUsersData: ref([]),
    authRegisterUser: ref({}),
    authErrors: ref([]),
    authLoading: ref(false),
  }),

  getters: {
    userCredentials: (state) => state.authUserCredentials,
    userRegistration: (state) => state.authUserRegistration,
    userData: (state) => state.authUserData,
    usersData: (state) => state.authUsersData,
    registerUser: (state) => state.authRegisterUser,
    errors: (state) => state.authErrors,
    loading: (state) => state.authLoading,
  },

  actions: {
    async getTokenSession() {
      await axios
        .get("/sanctum/csrf-cookie")
        .then((res) => {
          console.log(res, "token");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getUserData() {
      this.authLoading = true;
      this.authErrors = [];
      await axios
        .get("/api/v1/user")
        .then((res) => {
          responseMessage().success("Successfully Login");
          redirectTo().redirect(res.data.role.role);
        })
        .catch((err) => {
          this.authLoading = false;
        });
    },

    async createUser() {
      this.authErrors = [];

      if (this.authUserRegistration.id != null) {
        await axios
          .put(
            "api/v1/Users" + this.authUserRegistration.id,
            this.authUserRegistration
          )
          .then((res) => {
            responseMessage().warning("Data Updated.");
            this.getStockIn();
            this.modalToggle();
          })
          .catch((err) => {
            responseMessage().error(err.response.data.message);
            this.authErrors = err.response.data.errors;
          });
      } else {
        await axios
          .post("/register", this.authUserRegistration)
          .then((res) => {
            responseMessage().success("Successfully Registered.");
            // router.replace({ path: "/login" });
            console.log(res);
          })
          .catch((err) => {
            responseMessage().error(err.response.data.message);
            this.authErrors = err.response.data.errors;
          });
      }
    },

    async handleLogin() {
      this.authLoading = true;
      this.authErrors = [];

      await axios
        .post("/login", this.authUserCredentials)
        .then((res) => {
          this.authLoading = false;
          this.getUserData();
        })
        .catch((err) => {
          responseMessage().error(err.response.data.message);
          this.authLoading = false;
          this.authErrors = err.response.data.errors;
          console.log(err);
        });
    },

    async handleLogout() {
      this.authUser = [];
      this.authErrors = [];
      await axios.post("/logout").then((res) => {
        responseMessage().success("Successfully Logout");
        router.replace({ path: "/" });
      });
    },

    resetInput() {
      // RESET THE REGISTRATION FROM
      this.authUserRegistration.id = null;
      this.authUserRegistration.email = "";
      this.authUserRegistration.name = "";
      this.authUserRegistration.password = "";
      this.authUserRegistration.password_confirmation = "";

      // RESET THE USER  CREDENTIAL FROM
      this.authUserCredentials.email = "";
      this.authUserCredentials.password = "";
      this.authUserCredentials.remember = false;
    },
  },
  persist: true,
});
