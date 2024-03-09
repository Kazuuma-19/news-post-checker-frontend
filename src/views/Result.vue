<script setup>
import { ref, computed } from "vue";
import { usePostsStore } from "../stores/posts";
import { FwbButton } from "flowbite-vue";
import ResultTable from "../components/ResultTable.vue";

const posts = usePostsStore();
const selectedTab = ref("post");

const sortedData = computed(() => {
  // 選択されたタブの投稿回数でソート
  return [...posts.response].sort(
    (a, b) => a[selectedTab.value].count - b[selectedTab.value].count,
  );
});
</script>

<template>
  <!-- tab -->
  <ul
    class="flex text-sm font-medium text-center text-gray-500 rounded-lg shadow dark:divide-gray-700 dark:text-gray-400"
  >
    <li class="w-full focus-within:z-10" @click="selectedTab = 'post'">
      <a
        href="#"
        class="inline-block w-full p-2 sm:p-4 border-r border-gray-200 dark:border-gray-700 dark:bg-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 focus:outline-none hover:text-gray-700 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200': selectedTab === 'post',
          'text-gray-900': selectedTab === 'post',
        }"
        aria-current="page"
      >
        投稿
      </a>
    </li>

    <li class="w-full focus-within:z-10" @click="selectedTab = 'reply'">
      <a
        href="#"
        class="inline-block w-full p-2 sm:p-4 border-s-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-e-lg focus:ring-4 focus:ring-blue-300 focus:outline-none hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200': selectedTab === 'reply',
          'text-gray-900': selectedTab === 'reply',
        }"
      >
        返信
      </a>
    </li>
  </ul>

  <ResultTable :data="sortedData" :selectedTab="selectedTab" />

  <fwb-button class="text-center block" color="default" outline>
    <router-link to="/">戻る</router-link>
  </fwb-button>
</template>
