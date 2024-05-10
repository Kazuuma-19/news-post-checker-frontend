<script setup lang="ts">
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";
import { ref, watch } from "vue";
import axios from "axios";
import { Student } from "../../../types/types";
import { getGradeOptions } from "../../../utils/gradeConverter";
import CheckBox from "../../base/CheckBox.vue";
import { apiURLs } from "../../../utils/constantVariables";

const props = defineProps<{
  isVisible: boolean;
  editingStudent: Student;
}>();
const emit = defineEmits(["closeModal", "updateStudent"]);

const grades = getGradeOptions();

/**
 * propsで渡ってきた学生情報を監視し、studentにセットする
 * immediate: trueにすることでページを読み込んだ際にも実行される
 */
const student = ref({} as Student);
watch(
  () => props.editingStudent,
  (newStudent: Student) => {
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
    await axios.put(`${apiURLs.STUDENT_URL}${student.value.id}`, student.value);
    emit("updateStudent");
    emit("closeModal");
  } catch (error) {
    console.error("Failed to edit student:", error);
  }
};
</script>

<template>
  <fwb-modal v-if="props.isVisible" @close="closeModal">
    <template #header>
      <div class="flex items-center px-2 text-lg">Edit</div>
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
      <CheckBox v-model="student.active">活動中</CheckBox>
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
