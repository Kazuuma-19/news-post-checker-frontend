import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessages", {
  state: () => ({
    message: "",
  }),
  actions: {
    setMessage(message: string) {
      this.message = message;
    },
  },
});
