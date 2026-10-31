<!-- .app/pages/index.vue -->
<script setup lang="ts">
import AuthButton from "~/components/AuthButton.vue";
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-8">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Hello there
        </h1>
        <p class="py-6">
          Keep track of your travels and adventuires. Add location, photos, and notes to create a digital journal of your journeyus.
        </p>
        <AuthButton />
      </div>
    </div>
  </div>
</template>
