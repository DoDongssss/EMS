<template>
  <main class="h-screen flex items-center justify-center">
    <h1 @click="authStore.handleLogout()" class="font-bold text-2xl">
      Dashboard ADMIN
    </h1>
  </main>
</template>

<script>
import { useAuthStore } from "@/stores/Auth";

export default {
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
