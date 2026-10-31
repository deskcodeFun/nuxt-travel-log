<!-- ./app/pages/error.vue -->
<script setup lang='ts'>
const route = useRoute();
const error = route.query.error || "an unkonw error occrued";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2 text-center">
      <span>Something Wrong {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary ">
      Home
      <Icon
        name="tabler:arrow-left" size="24" class="mt-1"
      />
    </NuxtLink>
  </div>
</template>
