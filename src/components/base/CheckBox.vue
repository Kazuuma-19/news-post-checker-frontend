<script setup lang="ts">
const isActive = defineModel<boolean>();
</script>

<template>
  <div class="flex items-center">
    <input
      v-model="isActive"
      id="edit-checked-checkbox"
      type="checkbox"
      class="size-4 rounded border-gray-300 bg-gray-100 text-main-color-blue focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
    />
    <label
      for="edit-checked-checkbox"
      class="ms-2 text-sm font-medium dark:text-gray-300"
    >
      <slot></slot>
    </label>
  </div>
</template>
