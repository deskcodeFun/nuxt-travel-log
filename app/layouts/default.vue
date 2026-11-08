<script setup lang="ts">
import NavBar from "~/components/nav-bar.vue";
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
