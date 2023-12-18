<template>
  <div class="absolute bottom-0">
    <div class="btm-nav border-t border-gray-200">
      <button
        @click="redirectTo('userIndex')"
        :class="activePath == '/user' ? 'active' : ''"
        class="hover:bg-blue-100/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="btm-nav-label">Home</span>
      </button>
      <button
        @click="redirectTo('event')"
        :class="activePath == '/user/event' ? 'active' : ''"
        class="hover:bg-blue-100/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-calendar h-5 w-5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span class="btm-nav-label">Events</span>
      </button>
      <button
        @click="redirectTo('profile')"
        :class="activePath == '/user/profile' ? 'active' : ''"
        class="hover:bg-blue-100/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-user h-5 w-5"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span class="btm-nav-label">Profile</span>
      </button>

      <button @click="authStore.handleLogout" class="hover:bg-red-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-log-out h-5 w-5"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        <span class="btm-nav-label">Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import { useAuthStore } from "../stores/Auth";
import router from "../router";

export default {
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
  computed: {
    // pathName() {
    //   return this.$route.path.replace(/^((?:\/[^\/]+){2})\/[^\/]+/, "$1");
    // },
    activePath() {
      return this.$route.path;
    },
  },
  methods: {
    redirectTo(name) {
      router.replace({ name: name });
    },
  },
};
</script>

<style>
.nav-item.active {
  border-left: 3px solid green;
  margin-left: 5px;
  background-color: #f2f2f2 !important;
  color: #000 !important;
  border-radius: 0 8px 8px 0;
}
/* width */
.scrollable::-webkit-scrollbar {
  width: 3px;
  border-radius: 100%;
}

/* Track */
.scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scrollable::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

/* Handle on hover */
.scrollable::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
