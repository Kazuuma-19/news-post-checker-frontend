<script setup>
import { computed } from "vue";
import { usePostsStore } from "../stores/posts";
import { FwbButton } from "flowbite-vue";
import ResultTable from "../components/ResultTable.vue";

const posts = usePostsStore();

/**
 * 投稿の回数と返信の回数でソートしたデータを返す
 * @returns {Array} ソート済みのデータ
 */
const sortedData = computed(() => {
  return [...posts.response].sort((a, b) => {
    // まず投稿の回数を昇順でソート
    const postCountDiff = a.post.count - b.post.count;
    if (postCountDiff !== 0) {
      return postCountDiff;
    }
    // 投稿の回数が同じ場合、返信の回数を昇順でソート
    return a.reply.count - b.reply.count;
  });
});
</script>

<template>
  <ResultTable :data="sortedData" />

  <fwb-button class="text-center block" color="default" outline>
    <router-link to="/">戻る</router-link>
  </fwb-button>
</template>
