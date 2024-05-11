<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePostsStore } from "@stores/posts";
import { NewsPost } from "@type/types";
import HomeCard from "@components/domain/home/HomeCard.vue";
import HomeSearchBox from "@components/domain/home/HomeSearchBox.vue";
import { apiURLs } from "@utils/constantVariables";

const router = useRouter();
const posts = usePostsStore();
const isScraping = ref<boolean>(false);

/**
 * スクレイピング先を定義
 * @param url スクレイピング対象のURL
 */
const getScrapeData = async (url: string): Promise<NewsPost[]> => {
  try {
    const { data } = await axios.get(apiURLs.SCRAPING_URL, {
      params: { url },
    });
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
  <HomeCard />

  <HomeSearchBox :isScraping="isScraping" @startScraping="startScraping" />
</template>
