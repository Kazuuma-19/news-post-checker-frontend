<script setup lang="ts">
import { ref } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

defineProps<{
  checkedStudents: string[];
}>();

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
    <p class="mb-6 text-2xl">発表者のチーム数を選択してください</p>

    <form class="mb-8">
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
    </form>

    <div class="mb-8 flex flex-wrap items-center gap-4">
      <Card class="w-[18%]" v-for="student in checkedStudents" :key="student">
        <CardHeader>
          <CardTitle>{{ student }}</CardTitle>
        </CardHeader>

        <CardContent>
          <ul class="grid grid-cols-2 gap-2" id="student">
            <li v-for="number in teamNumber" :key="number">
              <input
                type="radio"
                :id="`${student}-${number}`"
                :name="student"
                class="peer hidden"
              />
              <label
                :for="`${student}-${number}`"
                class="block cursor-pointer rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
              >
                {{ `Team ${number}` }}
              </label>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <Card class="w-[32%]" v-for="number in teamNumber" :key="number">
        <CardHeader>
          <CardTitle>{{ `Team ${number}` }}</CardTitle>
        </CardHeader>
        <CardContent> 名前が入ります </CardContent>
      </Card>
    </div>
  </div>
</template>
