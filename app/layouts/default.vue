<script setup lang="ts">
import NavBar from "~/components/nav-bar.vue";

const authStore = useAuthStore();
await authStore.init();
</script>

<!-- ./app/layouts/default.vue  -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
