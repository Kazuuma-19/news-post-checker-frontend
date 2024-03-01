<script setup>
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["isVisible"]);
const emit = defineEmits(["closeModal"]);

const selected = ref("");
const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FOURTH_YEAR", name: "４年" },
];

const closeModal = () => {
  emit("closeModal");
};

const addStudent = () => {
  console.log("addStudent");
  closeModal();
};
</script>

<template>
  <fwb-modal v-if="props.isVisible" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg px-2">Create</div>
    </template>

    <template #body>
      <fwb-input
        class="mb-3"
        label="名前"
        v-model="name"
        placeholder="Enter your name"
        required
      />
      <fwb-select v-model="selected" :options="grades" label="学年" />
    </template>

    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">Cancel</fwb-button>
        <fwb-button @click="addStudent" color="green">Add</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
