import { defineStore } from "pinia";
import { Post } from "../types/types";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    response: [] as Post[],
  }),
  actions: {
    setResponse(response: Post[]) {
      this.response = response;
    },
  },
});
