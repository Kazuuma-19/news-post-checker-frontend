<script setup lang="ts">
import NumberInput from "@/components/base/NumberInput.vue";
import { useInputNumber } from "@/composable/useInputNumber";
import { watch } from "vue";

const emit = defineEmits<{
  (e: "update", number: number): void;
}>();

const {
  number: numberOfGroup,
  increment,
  decrement,
  handleNumberChanged,
} = useInputNumber();

watch(
  numberOfGroup,
  () => {
    emit("update", numberOfGroup.value);
  },
  { immediate: true },
);
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">班数を選択してください</p>

    <NumberInput
      :number="numberOfGroup"
      :increment="increment"
      :decrement="decrement"
      :handle-number-changed="handleNumberChanged"
    >
      班数
    </NumberInput>
  </div>
</template>
