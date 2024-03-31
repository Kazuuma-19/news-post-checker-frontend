import { defineStore } from "pinia";
import { NewsPost } from "../types/types";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    response: [] as NewsPost[],
  }),
  actions: {
    setResponse(response: NewsPost[]) {
      this.response = response;
    },
  },
});
