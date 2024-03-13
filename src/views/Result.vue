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

/**
 * 投稿・返信していない学生の名前をクリップボードにコピーする
 */
const copyName = () => {
  // 投稿も返信もしていない場合、名字を返す
  const names = posts.response
    .filter((post) => {
      return post.post.count === 0 && post.reply.count === 0;
    })
    .map((post) => post.name.split(" ")[0])
    .join("\n");

  navigator.clipboard.writeText(names);
};
</script>

<template>
  <div class="flex items-center justify-end gap-2">
    <fwb-button @click="copyName" color="dark" outline>Copy</fwb-button>

    <fwb-button color="default" outline>
      <router-link to="/">Back</router-link>
    </fwb-button>
  </div>

  <ResultTable :data="sortedData" />
</template>
