<script setup lang="ts">
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref } from "vue";
import axios from "axios";
import { getGradeOptions } from "@utils/gradeConverter";
import CheckBox from "@components/base/CheckBox.vue";
import { apiURLs } from "@utils/constantVariables";

const props = defineProps<{
  isVisible: boolean;
}>();
const emit = defineEmits(["closeModal", "updateStudent"]);

const student = ref({ name: "", grade: "", active: true });
const grades = getGradeOptions();

const closeModal = () => {
  emit("closeModal");
};
/**
 * フォームのバリデーション
 */
const validateForm = (): boolean => {
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
    await axios.post(apiURLs.STUDENT_URL, {
      name: student.value.name,
      grade: student.value.grade,
      active: student.value.active,
    });
    // 学生を追加したらフォームを初期化する
    student.value = { name: "", grade: "", active: true };
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
      <div class="flex items-center px-2 text-lg">Create</div>
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
      <CheckBox v-model="student.active">活動中</CheckBox>
    </template>

    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">Cancel</fwb-button>
        <fwb-button @click="addStudent" color="green">Add</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
