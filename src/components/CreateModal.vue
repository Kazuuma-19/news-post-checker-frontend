<script setup>
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref } from "vue";
import axios from "axios";

const props = defineProps(["isVisible"]);
const emit = defineEmits(["closeModal", "updateStudent"]);

const student = ref({ name: "", grade: "" });
const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FOURTH_YEAR", name: "４年" },
];

const closeModal = () => {
  emit("closeModal");
};
/**
 * フォームのバリデーション
 */
const validateForm = () => {
  if (!student.value.name || !student.value.grade) {
    alert("名前と学年を入力してください。");
    return false;
  }
  return true;
};
/**
 * 学生を追加する
 */
const addStudent = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    await axios.post("https://news-post-checker-backend.fly.dev/students", {
      name: student.value.name,
      grade: student.value.grade,
    });
    student.value = { name: "", grade: "" };
    emit("updateStudent");
    closeModal();
  } catch (error) {
    console.error("Failed to add student:", error);
  }
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
        v-model="student.name"
        placeholder="Enter your name"
        required
      />
      <fwb-select
        v-model="student.grade"
        :options="grades"
        label="学年"
        class="mb-6"
      />
      <div class="flex items-center">
        <input
          checked
          v-model="student.active"
          id="edit-checked-checkbox"
          type="checkbox"
          class="w-4 h-4 text-main-color-blue bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="edit-checked-checkbox"
          class="ms-2 text-sm font-medium dark:text-gray-300"
        >
          活動中
        </label>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">Cancel</fwb-button>
        <fwb-button @click="addStudent" color="green">Add</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
