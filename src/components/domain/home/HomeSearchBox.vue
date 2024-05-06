<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePostsStore } from "../../../stores/posts";
import { NewsPost } from "../../../types/types";
import LoadingSpinner from "../../../components/base/LoadingSpinner.vue";
import Input from "../../../components/base/Input.vue";

const router = useRouter();
const posts = usePostsStore();
const isScraping = ref<boolean>(false);

/**
 * スクレイピング先を定義
 * @param url スクレイピング対象のURL
 */
const getScrapeData = async (url: string): Promise<NewsPost[]> => {
  try {
    const { data } = await axios.get(
      "https://news-post-checker-backend.fly.dev/scraping",
      {
        params: { url },
      },
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch scraping data:", error);
    throw error;
  }
};
/**
 * スクレイピングを実行し、結果をセットする
 * その後、Resultページに遷移する
 */
const startScraping = async (): Promise<void> => {
  isScraping.value = true;
  try {
    const data = await getScrapeData(posts.url);
    posts.setResponse(data);
    router.push({ name: "Result" });
  } catch (error) {
    console.error("Failed to start scraping:", error);
  } finally {
    isScraping.value = false;
  }
};
</script>

<template>
  <div class="my-12">
    <Input>Link</Input>

    <button
      class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main-color-blue text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
      type="button"
      :disabled="isScraping"
      @click="startScraping"
    >
      <span class="relative">
        <LoadingSpinner v-show="isScraping" />

        <span v-if="isScraping">Loading...</span>
        <span v-else>Start</span>
      </span>
    </button>
  </div>
</template>
