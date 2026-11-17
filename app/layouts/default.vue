<!-- ./app/layouts/default.vue  -->
<script setup lang="ts">
import NavBar from "~/components/nav-bar.vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>
