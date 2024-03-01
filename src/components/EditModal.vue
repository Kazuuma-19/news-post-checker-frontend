<script setup>
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps(["isVisible", "editingStudent"]);
const emit = defineEmits(["closeModal"]);

const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FOURTH_YEAR", name: "４年" },
];
// propsから受け取った値を監視する
const student = ref({});
watch(
  () => props.editingStudent,
  (newStudent) => {
    student.value = { ...newStudent };
  },
  { immediate: true },
);

const closeModal = () => {
  emit("closeModal");
};

const editStudent = () => {
  console.log("editStudent");
  closeModal();
};
</script>

<template>
  <fwb-modal v-if="props.isVisible" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg px-2">Edit</div>
    </template>

    <template #body>
      <fwb-input
        class="mb-3"
        v-model="student.name"
        label="名前"
        placeholder="Enter your name"
        required
      />
      <fwb-select v-model="student.grade" :options="grades" label="学年" />
    </template>

    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Cancel
        </fwb-button>
        <fwb-button @click="editStudent" color="green">Done</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
