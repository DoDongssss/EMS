<template>
  <div class="h-screen flex items-center justify-center relative">
    <main class="h-full w-full flex items-center justify-center bg-gray-200">
      User Profile
    </main>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation.vue";

export default {
  components: {
    BottomNavigation,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
