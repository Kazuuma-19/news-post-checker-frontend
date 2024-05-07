<script setup lang="ts">
import LoadingSpinner from "../../../components/base/LoadingSpinner.vue";
import Input from "../../../components/base/Input.vue";

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

    <button
      class="block w-full select-none rounded-lg bg-main-color-blue px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      :disabled="isScraping"
      @click="startScraping"
    >
      <span class="relative">
        <LoadingSpinner v-show="isScraping" />

        <span>{{ isScraping ? "Loading..." : "Start" }}</span>
      </span>
    </button>
  </div>
</template>
