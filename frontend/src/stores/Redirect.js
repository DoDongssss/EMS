import { defineStore } from "pinia";
import router from "../router";

export const redirectTo = defineStore("redirect", {
  actions: {
    redirect(role) {
      // console.log("redirect sa login amigo")
      //   let user_data = localStorage.getItem("user");
      //   let role = "";
      //   if (user_data) {
      //     role = JSON.parse(localStorage.getItem("user")).role;
      //   } else {
      //     role = "";
      //   }

      console.log(role);

      switch (role) {
        case "ADMIN":
          //   router.currentRoute.value.path.split("/")[1] == "admin"
          //     ? ""
          //     : router.replace({ path: "/admin" });
          router.replace({ path: "/client" });
          break;
        case "USER":
          router.replace({ path: "/USER" });
          break;
        default:
          router.replace({ path: "/login" });
          break;
      }
    },
  },
});
