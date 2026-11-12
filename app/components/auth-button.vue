<!-- ./app.components/auth-button.vue -->
<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <div v-if="!authStore.loading && authStore.user" class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="authStore.user.image" :alt="authStore.user.name">
        </div>
      </div>
      <span>{{ authStore.user?.name }}</span>
      <Icon name="tabler:chevron-down" size="24" />
    </div>
    <ul class="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="20" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button
    v-else
  <button
    :disabled="authStore.loading"
    class="btn btn-accent"
    @click="authStore.signIn"
  >
    Sign In
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="24"
    />
  </button>
</template>
