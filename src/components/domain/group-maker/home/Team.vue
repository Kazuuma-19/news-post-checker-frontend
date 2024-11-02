<script setup lang="ts">
import { ref } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckedStudents } from "@/types/types";
import { useInputNumber } from "@/composable/useInputNumber";
import NumberInput from "@/components/base/NumberInput.vue";

defineProps<{
  checkedStudents: CheckedStudents[];
}>();

const teamAssignments = ref<Record<number, string[]>>({});

const {
  number: teamNumber,
  increment,
  decrement,
  handleNumberChanged,
} = useInputNumber();

/**
 * Add the student to the team
 * @param student
 * @param teamNumber
 */
const addStudentToTeam = (student: string, teamNumber: number): void => {
  if (teamAssignments.value[teamNumber]) {
    teamAssignments.value[teamNumber].push(student);
  } else {
    teamAssignments.value[teamNumber] = [student];
  }
};

/**
 * Remove the student from the team
 * @param student - The student to be removed from the team
 */
const removeStudentFromTeam = (student: string): void => {
  Object.keys(teamAssignments.value).forEach((team) => {
    const teamNum: number = parseInt(team);
    const teamMembers: string[] = teamAssignments.value[teamNum];
    const studentIndex: number = teamMembers.indexOf(student);
    if (studentIndex === -1) return;
    teamMembers.splice(studentIndex, 1);
  });
};

const handleTeamChanged = (event: Event, student: string): void => {
  if (!(event.target instanceof HTMLInputElement)) return;
  const teamNumber: number = parseInt(event.target.value);
  const studentName: string = student;

  removeStudentFromTeam(studentName);
  addStudentToTeam(studentName, teamNumber);
};
</script>

<template>
  <div class="mb-14">
    <p class="mb-6 text-2xl">発表者のチームを選択してください</p>

    <NumberInput
      :number="teamNumber"
      :increment="increment"
      :decrement="decrement"
      :handle-number-changed="handleNumberChanged"
    >
      チーム数
    </NumberInput>

    <div class="mb-8 flex flex-wrap items-center gap-4">
      <Card
        class="w-[18%]"
        v-for="student in checkedStudents"
        :key="student.id"
      >
        <CardHeader>
          <CardTitle>{{ student.name }}</CardTitle>
        </CardHeader>

        <CardContent>
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="number in teamNumber" :key="number">
              <!-- :name = grouping the radio button so that a user can select only 1 element -->
              <input
                type="radio"
                :id="`${student.id}-${number}`"
                :name="student.name"
                :value="number"
                class="peer hidden"
                @change="handleTeamChanged($event, student.name)"
              />
              <label
                :for="`${student.id}-${number}`"
                class="block cursor-pointer rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-main-color-blue peer-checked:text-main-color-blue"
              >
                {{ `Team ${number}` }}
              </label>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <div class="flex flex-wrap gap-4">
      <Card class="w-[32%]" v-for="number in teamNumber" :key="number">
        <CardHeader>
          <CardTitle>{{ `Team ${number}` }}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="list-inside list-decimal">
            <li
              v-for="student in teamAssignments[number]"
              :key="student"
              class="py-1"
            >
              {{ student }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
