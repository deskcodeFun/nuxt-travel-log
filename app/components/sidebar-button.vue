<!-- ./app/component/sidebar-button.vue -->

<script setup lang="ts">
const props = defineProps<{ label: string; icon: string; href: string; showLabel: boolean }>();
const route = useRoute();
</script>

<template>
  <div
    class="tooltip-right"
    :data-tip="showLabel ? undefined : props.label"
    :class="{ tooltip: !showLabel }"
  >
    <NuxtLink
      :to="props.href"
      :class="{
        'bg-base-200': route.path === props.href,
        'justify-center': !props.showLabel,
        'justify-start': props.showLabel,
      }"
      class="flex flex-nowrap gap-2 p-2 hover:bg-base-200 hover:cursor-pointer"
    >
      <Icon :name="props.icon" size="24" />
      <Transition name="grow">
        <span v-if="showLabel">
          {{ props.label }}
        </span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active,
.grow-leave-action {
  transition: transform 0.1s ease opacity 0.1s ease;
}
.grow-enter-from,
.grow-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
