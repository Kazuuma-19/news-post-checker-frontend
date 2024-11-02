<script setup lang="ts">
import Input from "@components/base/Input.vue";
import { Loader2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

defineProps<{
  isScraping: boolean;
}>();
const emit = defineEmits(["startScraping"]);

const startScraping = () => {
  emit("startScraping");
};
</script>

<template>
  <div class="my-12">
    <Input>Link</Input>

    <Button
      class="w-full bg-main-color-blue py-3 shadow-md shadow-gray-900/10 transition-all hover:bg-main-color-blue hover:opacity-85 hover:shadow-lg hover:shadow-gray-900/20"
      :disabled="isScraping"
      @click="startScraping"
    >
      <Loader2 v-show="isScraping" class="mr-2 size-6 animate-spin" />
      <span>{{ isScraping ? "Loading..." : "Start" }}</span>
    </Button>
  </div>
</template>
