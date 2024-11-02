<script setup lang="ts">
import { computed } from "vue";
import { usePostsStore } from "@stores/posts";
import { FwbButton } from "flowbite-vue";
import ResultTable from "@/components/domain/news-post-checker/results/ResultTable.vue";
import FlashMessage from "@components/base/FlashMessage.vue";
import { NewsPost } from "@type/types";
import { useFlashMessageStore } from "@stores/flashMessage";

const posts = usePostsStore();
const copyFlashMessage = useFlashMessageStore();

/**
 * 返信・投稿の回数、学年でソート
 * @returns {Array} ソート済みのデータ
 */
const sortedData = computed<NewsPost[]>(() => {
  return [...posts.response].sort((a: NewsPost, b: NewsPost) => {
    // まず投稿の回数を昇順でソート
    const postCountDiff = a.post.count - b.post.count;
    if (postCountDiff !== 0) {
      return postCountDiff;
    }
    // 投稿の回数が同じ場合、返信の回数を昇順でソート
    const replyCountDiff = a.reply.count - b.reply.count;
    if (replyCountDiff !== 0) {
      return replyCountDiff;
    }

    // 投稿・返信の回数が同じ場合、学年でソート
    const gradeOrder = {
      FIRST_YEAR: 1,
      SECOND_YEAR: 2,
      THIRD_YEAR: 3,
      FOURTH_YEAR: 4,
    };
    return gradeOrder[b.grade] - gradeOrder[a.grade];
  });
});

/**
 * 投稿・返信していない学生の名前をクリップボードにコピーする
 */
const copyName = () => {
  // 投稿も返信もしていない場合、名字を返す
  const names: string = sortedData.value
    .filter((post) => {
      return post.post.count === 0 && post.reply.count === 0;
    })
    .map((post) => post.name.split(" ")[0])
    .join("・");

  navigator.clipboard.writeText(names);

  copyFlashMessage.setMessage(true, "コピーしました！");
  copyFlashMessage.removeMessage();
};
</script>

<template>
  <FlashMessage />

  <div class="flex items-center justify-end gap-2">
    <fwb-button @click="copyName" color="dark" outline>Copy Names</fwb-button>

    <fwb-button
      color="default"
      outline
      class="border-main-color-blue text-main-color-blue hover:bg-main-color-blue"
    >
      <router-link to="/">Back</router-link>
    </fwb-button>
  </div>

  <ResultTable :data="sortedData" />
</template>
