<script setup lang="ts">
defineProps<{
  number: number;
  increment: () => void;
  decrement: () => void;
  handleNumberChanged: (event: Event) => void;
}>();
</script>

<template>
  <form>
    <label class="mb-2 text-sm text-gray-900">
      <slot></slot>
    </label>

    <div class="relative flex max-w-32 items-center">
      <button
        type="button"
        class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        @click="decrement"
      >
        <svg
          class="text-gray-900"
          width="12"
          height="12"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </button>

      <input
        type="number"
        :value="number"
        @change="handleNumberChanged"
        class="h-11 w-20 border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center focus:border-blue-500 focus:ring-blue-500"
      />

      <button
        type="button"
        class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        @click="increment"
      >
        <svg
          class="text-gray-900"
          width="12"
          height="12"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  </form>
</template>
