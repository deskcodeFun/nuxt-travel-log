<script setup lang="ts">
import AuthButton from "./auth-button.vue";
import ThemeToggle from "./theme-toggle.vue";
</script>

<!-- .app/components/nav-bar.vue -->
<template>
  <div class="navbar bg-primary ">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
