<script setup lang="ts">
import { ref } from "vue";

const groupNumber = ref(1);

const increment = () => {
  groupNumber.value++;
};

const decrement = () => {
  if (groupNumber.value > 1) {
    groupNumber.value--;
  }
};
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">班数を選択してください</p>

    <form>
      <label class="mb-2 text-sm text-gray-900"> 班数： </label>

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
          v-model="groupNumber"
          class="h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center focus:border-blue-500 focus:ring-blue-500"
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
  </div>
</template>
