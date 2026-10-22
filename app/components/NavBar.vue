<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";
</script>

<!-- .app/components/nav-bar.vue -->
<template>
  <div class="navbar bg-primary ">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl text-white">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ThemeToggle />
      <a class="btn btn-accent">Sign In
        <Icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
