<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import CreateModal from "../../../components/domain/students/CreateModal.vue";
import EditModal from "../../../components/domain/students/EditModal.vue";
import { Student } from "../../../types/types";
import StudentTable from "../../../components/domain/students/StudentTable.vue";
import ActionButton from "../../base/ActionButton.vue";

const studentApiUrl = "https://news-post-checker-backend.fly.dev/students";
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
    const response = await axios.get(studentApiUrl);
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
    await axios.delete(`${studentApiUrl}/${id}`);
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
