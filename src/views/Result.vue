<script setup>
import { computed, ref } from "vue";
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
  FwbButton,
} from "flowbite-vue";
import { usePostsStore } from "../stores/posts";
import { DateTime } from "luxon";

const posts = usePostsStore();
const selectedTab = ref("post");

/**
 * enum型の学年を日本語に変換する
 * @param {string} grade
 */
const convertGrade = (grade) => {
  switch (grade) {
    case "FIRST_YEAR":
      return "１年";
    case "SECOND_YEAR":
      return "２年";
    case "THIRD_YEAR":
      return "３年";
    case "FOURTH_YEAR":
      return "４年";
    default:
      return "不明";
  }
};
/**
 * 日付を日本語に変換する
 * @param {string} dateTime
 * @returns 日本語に変換した日付
 */
const covertDateTime = (dateTime) => {
  return DateTime.fromISO(dateTime, {
    zone: "Asia/Tokyo",
  })
    .setLocale("ja")
    .toFormat("yyyy/M/d(EEE) HH:mm");
};

/**
 * 投稿をpostCountの降順でソート
 * @returns 配列をpostCountの降順でソートしたもの
 */
const sortedPosts = computed(() => {
  return [...posts.response].sort(
    (a, b) => a.post.postCount - b.post.postCount,
  );
});

/**
 * 返信をreplyCountの降順でソート
 * @returns 配列をreplyCountの降順でソートしたもの
 */
const sortedReplies = computed(() => {
  return [...posts.response].sort(
    (a, b) => a.reply.replyCount - b.reply.replyCount,
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

  <fwb-table class="my-8">
    <fwb-table-head>
      <fwb-table-head-cell>Grade</fwb-table-head-cell>
      <fwb-table-head-cell>Name</fwb-table-head-cell>
      <fwb-table-head-cell>Count</fwb-table-head-cell>
      <fwb-table-head-cell>Date</fwb-table-head-cell>
    </fwb-table-head>
    <!-- 投稿 -->
    <fwb-table-body v-show="selectedTab === 'post'">
      <fwb-table-row v-for="post in sortedPosts" :key="post.id">
        <fwb-table-cell>{{ convertGrade(post.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ post.name }}</fwb-table-cell>
        <fwb-table-cell>{{ post.post.postCount }}</fwb-table-cell>
        <fwb-table-cell>
          <div v-for="(postDate, index) in post.post.dateTime" :key="index">
            {{ covertDateTime(postDate) }}
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
    <!-- 返信 -->
    <fwb-table-body v-show="selectedTab === 'reply'">
      <fwb-table-row v-for="post in sortedReplies" :key="post.id">
        <fwb-table-cell>{{ convertGrade(post.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ post.name }}</fwb-table-cell>
        <fwb-table-cell>{{ post.reply.replyCount }}</fwb-table-cell>
        <fwb-table-cell>
          <div v-for="(replyDate, index) in post.reply.dateTime" :key="index">
            {{ covertDateTime(replyDate) }}
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>

  <fwb-button class="text-center block" color="default" outline>
    <router-link to="/">戻る</router-link>
  </fwb-button>
</template>
