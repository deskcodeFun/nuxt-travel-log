<!-- ./aap/pages/dashboard/index.vue -->
<script setup lang="ts">
import SidebarButton from "~/components/sidebar-button.vue";

const isSidebarOpen = ref(true);
onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}
</script>

<!-- ./app/pages/dashboard/index.vue  -->
<template>
  <div class="flex-1 flex">
    <!-- sidebar element -->
    <div class="bg-base-100 transition-all duration-900" :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }">
      <!-- icon open / close sidebar -->
      <div
        class="flex p-2 hover: cursor-pointer bg-base-200"
        :class="{ 'justify-center': !isSidebarOpen, 'justify-end': isSidebarOpen }"
        @click="toggleSidebar"
      >
        <Icon
          v-if="isSidebarOpen"
          name="tabler:chevron-left"
          size="32"
        />
        <Icon
          v-else
          name="tabler:chevron-right"
          size="32"
        />
      </div>
      <!-- each button in sidebar -->
      <div class="flex flex-col">
        <SidebarButton
          :show-label="isSidebarOpen"
          label="Locations"
          icon="tabler:map"
          href="/dashboard"
        />
        <SidebarButton
          :show-label="isSidebarOpen"
          label="Add Location"
          icon="tabler:circle-plus-filled"
          href="/add-location"
        />
        <div class="divider" />
        <SidebarButton
          :show-label="isSidebarOpen"
          label="Sign Out"
          icon="tabler:logout-2"
          href="/sign-out"
        />
      </div>
    </div>

    <!-- content element -->
    <div class="flex-1" />
  </div>
</template>
