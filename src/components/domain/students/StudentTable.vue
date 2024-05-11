<script setup lang="ts">
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import ActionButton from "@components/base/ActionButton.vue";
import { Student } from "@type/types";
import { convertGrade } from "@utils/gradeConverter";

const props = defineProps<{
  students: Student[];
}>();

const emit = defineEmits<{
  (e: "editStudent", student: Student): void;
  (e: "deleteStudent", id: number): void;
}>();

const editStudent = (student: Student) => {
  emit("editStudent", student);
};

const deleteStudent = (id: number) => {
  emit("deleteStudent", id);
};
</script>

<template>
  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>活動中</fwb-table-head-cell>
      <fwb-table-head-cell>学年</fwb-table-head-cell>
      <fwb-table-head-cell>名前</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body>
      <fwb-table-row v-for="student in props.students" :key="student.id">
        <fwb-table-cell>
          <input
            v-model="student.active"
            id="checked-checkbox"
            type="checkbox"
            class="size-4 rounded border-gray-300 bg-gray-100 text-main-color-blue focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            disabled
          />
        </fwb-table-cell>
        <fwb-table-cell>{{ convertGrade(student.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ student.name }}</fwb-table-cell>
        <fwb-table-cell>
          <div class="inline-flex gap-3 lg:gap-5">
            <ActionButton icon="edit" @click="editStudent(student)" />
            <ActionButton icon="delete" @click="deleteStudent(student.id)" />
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>
