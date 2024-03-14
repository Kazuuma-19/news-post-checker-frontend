<script setup>
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref, watch } from "vue";
import axios from "axios";

const props = defineProps(["isVisible", "editingStudent"]);
const emit = defineEmits(["closeModal", "updateStudent"]);

const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FOURTH_YEAR", name: "４年" },
];

/**
 * propsで渡ってきた学生情報を監視し、studentにセットする
 * immediate: trueにすることでページを読み込んだ際にも実行される
 */
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
/**
 * 学生を編集する
 */
const editStudent = async () => {
  try {
    await axios.put(
      `https://news-post-checker-backend.fly.dev/students/${student.value.id}`,
      student.value,
    );
    emit("updateStudent");
    closeModal();
  } catch (error) {
    console.error("Failed to edit student:", error);
  }
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
      <fwb-select
        v-model="student.grade"
        :options="grades"
        label="学年"
        class="mb-6"
      />
      <div class="flex items-center">
        <input
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
        <fwb-button @click="closeModal" color="alternative">
          Cancel
        </fwb-button>
        <fwb-button @click="editStudent" color="green">Done</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
