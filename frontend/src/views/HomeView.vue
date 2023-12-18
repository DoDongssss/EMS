<template>
  <div class="relative flex flex-col">
    <div
      class="absolute top-0 w-full flex items-center justify-between px-48 py-4 border-b bg-white/90 border-gray-300 z-10"
    >
      <h1 class="flex items-center">
        <span class="text-blue-500 font-[900] text-lg mr-2">KCC</span>
        <span class="font-bold">Reservation System</span>
      </h1>
      <div class="flex items-center gap-3">
        <router-link :to="{ name: 'login' }">
          <button
            class="rounded-full text-sm font-semibold k px-5 py-2 border-blue-600 border hover:bg-blue-600 hover:text-white transition-all"
          >
            Log in
          </button>
        </router-link>
        <router-link :to="{ name: 'register' }">
          <button
            class="rounded-full text-sm font-semibold text-white px-5 py-2 bg-blue-600 hover:bg-white hover:border-blue-600 border hover:text-black transition-all"
          >
            Sign up
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <main
    class="h-screen w-full bg-cover bg-no-repeat bg-[url('../images/background.jpg')] relative"
  >
    <div
      class="h-full w-full bg-black/60 flex items-center justify-center text-white"
    >
      <div class="flex flex-col gap-2 ml-24">
        <span class="font-[900] text-7xl flex items-center"
          >KCC
          <span class="text-4xl font-bold ml-4"> Mall of Marbel</span></span
        >
        <span class="font-bold text-5xl">Convention and Event Center</span>
        <span class="font-bold text-5xl">Reservation System</span>

        <button
          class="w-fit mt-5 px-6 py-3 bg-blue-600 rounded-full font-semibold flex items-center hover:bg-blue-500 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar h-5 w-5 mr-1"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>

          <router-link :to="{ name: 'login' }"> Reserve now </router-link>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
