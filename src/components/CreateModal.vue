<script setup>
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["isShowModal"]);
const emit = defineEmits(["closeModal"]);

const selected = ref("");
const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FORTH_YEAR", name: "４年" },
];

const closeModal = () => {
  emit("emitCloseModal");
};

const addStudent = () => {
  console.log("addStudent");
};
</script>

<template>
  <fwb-modal v-if="props.isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg px-2">新規追加</div>
    </template>

    <template #body>
      <fwb-input
        class="mb-3"
        v-model="name"
        label="名前"
        placeholder="enter your name"
        required
      />
      <fwb-select v-model="selected" :options="grades" label="学年" />
    </template>

    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Cancel
        </fwb-button>
        <fwb-button @click="addStudent" color="green">Add</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
