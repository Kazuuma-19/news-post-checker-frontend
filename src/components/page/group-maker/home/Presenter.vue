<script setup lang="ts">
import { Grade, CheckedStudents } from "@/types/types";
import { convertGrade } from "@/utils/gradeConverter";
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";
import { useStudentsStore } from "@/stores/students";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "checked", students: CheckedStudents[]): void;
}>();

const studentsStore = useStudentsStore();
const checkedStudents = ref<CheckedStudents[]>([]);

const handleChecked = (checked: boolean, student: CheckedStudents): void => {
  student.checked = checked;
  if (checked) {
    checkedStudents.value.push(student);
  } else {
    checkedStudents.value = checkedStudents.value.filter(
      (s) => s.id !== student.id,
    );
  }
  emit("checked", checkedStudents.value);
};
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">発表者を選択してください</p>

    <div
      v-for="(students, grade) in studentsStore.groupStudentsByGrade"
      :key="grade"
      class="mb-8"
    >
      <h2 class="mb-4 text-lg font-bold">
        学年： {{ convertGrade(grade as Grade) }}
      </h2>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="student in students"
          :key="student.id"
          class="flex items-center space-x-2"
        >
          <Checkbox
            :id="`presenter-${student.id}`"
            @update:checked="
              (checked) =>
                handleChecked(checked, {
                  id: student.id,
                  name: student.name,
                })
            "
          />
          <label :for="`presenter-${student.id}`">
            {{ student.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
