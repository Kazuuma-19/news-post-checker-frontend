<script setup lang="ts">
import { ref } from "vue";

const teamNumber = ref(1);

const increment = () => {
  teamNumber.value++;
};

const decrement = () => {
  if (teamNumber.value > 1) {
    teamNumber.value--;
  }
};
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">チーム数を選択してください</p>

    <form>
      <label class="mb-2 text-sm text-gray-900"> チーム数： </label>

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
          type="text"
          v-model="teamNumber"
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

      <div v-for="n in teamNumber" :key="n">
        {{ n }}
      </div>
    </form>
  </div>
</template>
