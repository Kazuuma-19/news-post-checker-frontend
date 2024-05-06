import { defineStore } from "pinia";
import { NewsPost } from "../types/types";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    response: [] as NewsPost[],
    url: "" as string,
  }),
  actions: {
    setResponse(response: NewsPost[]) {
      this.response = response;
    },
    setUrl(url: string) {
      this.url = url;
    },
  },
});
