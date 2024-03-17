import { defineStore } from "pinia";

interface Post {
  id: number;
  name: string;
  grade: "FIRST_YEAR" | "SECOND_YEAR" | "THIRD_YEAR" | "FOURTH_YEAR";
  active: boolean;
  created_at: string;
  updated_at: string;
  reply: {
    count: number;
    dateTime: string[];
  };
  post: {
    count: number;
    dateTime: string[];
  };
}

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
