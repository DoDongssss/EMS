import { ElMessage, ElLoading } from "element-plus";
import { defineStore } from "pinia";

export const responseMessage = defineStore("response", {
  actions: {
    success(message) {
      ElMessage({
        message: message,
        grouping: true,
        type: "success",
      });
    },
    error(message) {
      ElMessage({
        message: message,
        grouping: true,
        // duration: 50000000,
        type: "error",
      });
    },
    warning(message) {
      ElMessage({
        message: message,
        grouping: true,
        type: "warning",
      });
    },
    loading() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
});
