<script setup lang="ts">
import NumberInput from "@/components/base/NumberInput.vue";
import { useInputNumber } from "@/composable/useInputNumber";

const {
  number: groupNumber,
  increment,
  decrement,
  handleNumberChanged,
} = useInputNumber();
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">班数を選択してください</p>

    <NumberInput
      :number="groupNumber"
      :increment="increment"
      :decrement="decrement"
      :handle-number-changed="handleNumberChanged"
    >
      班数
    </NumberInput>
  </div>
</template>
