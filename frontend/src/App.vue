<template>
  <div>
    <!-- <BottomNavigation /> -->
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
// import BottomNavigation from "./components/BottomNavigation.vue";

export default {
  components: {
    // BottomNavigation,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
