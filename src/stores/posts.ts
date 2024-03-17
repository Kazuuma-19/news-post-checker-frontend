import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    response: null,
  }),
  actions: {
    setResponse(response) {
      this.response = response;
    },
  },
});
