<script setup>
import axios from "axios";
import { ref } from "vue";
import { FwbButton, FwbModal, FwbInput, FwbSelect } from "flowbite-vue";

const students = ref([]);
const isShowModal = ref(false);
const selected = ref("");
const grades = [
  { value: "FIRST_YEAR", name: "１年" },
  { value: "SECOND_YEAR", name: "２年" },
  { value: "THIRD_YEAR", name: "３年" },
  { value: "FORTH_YEAR", name: "４年" },
];

const closeModal = () => {
  isShowModal.value = false;
};
const showModal = () => {
  isShowModal.value = true;
};

axios
  // .get("https://news-post-checker-backend.fly.dev/student")
  .get("http://localhost:8080/students")
  .then((res) => {
    students.value = res.data;
  })
  .catch((error) => {
    console.log(error);
  });

const addStudent = () => {
  console.log("addStudent");
};
const editStudent = () => {
  console.log("edit");
};
const deleteStudent = () => {
  console.log("delete");
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
    case "FORTH_YEAR":
      return "４年";
    default:
      return "不明";
  }
};
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-2xl font-bold">学生一覧</h2>
    <button @click="showModal">
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

  <table class="w-full">
    <thead class="border-b">
      <tr>
        <th class="text-center">学年</th>
        <th class="text-center">名前</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b" v-for="student in students" :key="student.id">
        <td>{{ convertGrade(student.grade) }}</td>
        <td class="flex items-center justify-between">
          <div>{{ student.name }}</div>

          <div class="flex gap-3 lg:gap-5">
            <button @click="editStudent(1)">
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
            <button @click="deleteStudent(1)">
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
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- modal -->
  <fwb-modal v-if="isShowModal" @close="closeModal">
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
