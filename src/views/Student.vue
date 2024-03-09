<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import CreateModal from "../components/CreateModal.vue";
import EditModal from "../components/EditModal.vue";

const students = ref([]);
const selectedStudent = ref({});
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
    const response = await axios.get("http://localhost:8080/students");
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
const editStudent = (student) => {
  selectedStudent.value = { ...student };
  showEditModal();
};

/**
 * 学生を削除する
 * @param {*} 削除する学生のid
 */
const deleteStudent = async (id) => {
  const isConfirmed = confirm("本当に削除しますか？");
  if (!isConfirmed) {
    return;
  }

  try {
    await axios.delete(`http://localhost:8080/students/${id}`);
    getStudents();
  } catch (error) {
    console.error("Failed to delete student:", error);
  }
};

/**
 * enum型の学年を日本語に変換する
 * @param {string} grade
 */
const convertGrade = (grade) => {
  switch (grade) {
    case "FIRST_YEAR":
      return "１年";
    case "SECOND_YEAR":
      return "２年";
    case "THIRD_YEAR":
      return "３年";
    case "FOURTH_YEAR":
      return "４年";
    default:
      return "不明";
  }
};
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-2xl font-bold">学生一覧</h2>
    <button @click="showCreateModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  </div>

  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>学年</fwb-table-head-cell>
      <fwb-table-head-cell>名前</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body>
      <fwb-table-row v-for="student in students" :key="student.id">
        <fwb-table-cell>{{ convertGrade(student.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ student.name }}</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#" class="flex gap-3 lg:gap-5">
            <button @click="editStudent(student)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button @click="deleteStudent(student.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>

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
