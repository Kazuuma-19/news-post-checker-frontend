<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { Student } from "@type/types";
import ActionButton from "@components/base/ActionButton.vue";
import { apiURLs } from "@utils/constantVariables";
import StudentTable from "@/components/domain/news-post-checker/students/StudentTable.vue";
import CreateModal from "@/components/domain/news-post-checker/students/CreateModal.vue";
import EditModal from "@/components/domain/news-post-checker/students/EditModal.vue";

const students = ref([] as Student[]);
const selectedStudent = ref({} as Student);
const isCreateModalVisible = ref(false);
const isEditModalVisible = ref(false);

// モーダル表示制御
const showCreateModal = () => (isCreateModalVisible.value = true);
const closeCreateModal = () => (isCreateModalVisible.value = false);
const showEditModal = () => (isEditModalVisible.value = true);
const closeEditModal = () => (isEditModalVisible.value = false);

/**
 * 学生一覧を取得する
 */
const getStudents = async () => {
  try {
    const response = await axios.get(apiURLs.STUDENT_URL);
    students.value = response.data;
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};
onMounted(getStudents);

/**
 * 編集する学生の情報をpropsにセットし、モーダルを開く
 * @param {*} student 選択した学生の情報
 */
const editStudent = (student: Student) => {
  selectedStudent.value = { ...student };
  showEditModal();
};

/**
 * 学生を削除する
 * @param {*} 削除する学生のid
 */
const deleteStudent = async (id: number) => {
  const isConfirmed = confirm("本当に削除しますか？");
  if (!isConfirmed) return;

  try {
    await axios.delete(`${apiURLs.STUDENT_URL}${id}`);
    getStudents();
  } catch (error) {
    console.error("Failed to delete student:", error);
  }
};
</script>

<template>
  <div class="mb-8 flex items-center justify-between">
    <h2 class="text-2xl font-bold">学生一覧</h2>
    <ActionButton icon="add" @click="showCreateModal" />
  </div>

  <StudentTable
    :students="students"
    @editStudent="editStudent"
    @deleteStudent="deleteStudent"
  />

  <!-- modal -->
  <CreateModal
    :isVisible="isCreateModalVisible"
    @closeModal="closeCreateModal"
    @updateStudent="getStudents"
  />
  <EditModal
    :isVisible="isEditModalVisible"
    :editingStudent="selectedStudent"
    @closeModal="closeEditModal"
    @updateStudent="getStudents"
  />
</template>
