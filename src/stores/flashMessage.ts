import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessages", {
  state: () => ({
    isShowing: false,
    message: "",
  }),
  actions: {
    setMessage(isShowing: boolean, message: string) {
      this.isShowing = isShowing;
      this.message = message;
    },
    removeMessage() {
      setTimeout(() => {
        this.isShowing = false;
        this.message = "";
      }, 2000);
    },
  },
});
