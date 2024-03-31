<script setup lang="ts">
import { computed, ref } from "vue";
import { usePostsStore } from "../stores/posts";
import { FwbButton } from "flowbite-vue";
import ResultTable from "../components/ResultTable.vue";
import FlashMessage from "../components/FlashMessage.vue";
import { NewsPost } from "../types/types";
import { useFlashMessageStore } from "../stores/flashMessage";

const posts = usePostsStore();
const isFlash = ref(false);
const copyMessage = "コピーしました！";

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
 * フラッシュメッセージを表示する
 */
const showFlash = () => {
  useFlashMessageStore().setMessage(copyMessage);
  isFlash.value = true;
  setTimeout(() => {
    isFlash.value = false;
  }, 2000);
};

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
  showFlash();
};
</script>

<template>
  <FlashMessage v-show="isFlash" />

  <div class="flex items-center justify-end gap-2">
    <fwb-button @click="copyName" color="dark" outline>Copy Names</fwb-button>

    <fwb-button
      color="default"
      outline
      class="text-main-color-blue hover:bg-main-color-blue border-main-color-blue"
    >
      <router-link to="/">Back</router-link>
    </fwb-button>
  </div>

  <ResultTable :data="sortedData" />
</template>
