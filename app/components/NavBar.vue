<!-- ./app/components/NavBar.vue -->
<script setup lang="ts">
import AuthButton from "./AuthButton.vue";
import ThemeToggle from "./ThemeToggle.vue";
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
