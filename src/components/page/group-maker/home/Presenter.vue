<script setup lang="ts">
import { Grade } from "@/types/types";
import { convertGrade } from "@/utils/gradeConverter";
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";
import { useStudentsStore } from "@/stores/students";

const studentsStore = useStudentsStore();
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
          <Checkbox :id="`presenter-${student.id}`" />
          <label :for="`presenter-${student.id}`">
            {{ student.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
