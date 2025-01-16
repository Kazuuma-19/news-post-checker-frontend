<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import NumberOfGroup from "../../../domain/group-maker/home/NumberOfGroup.vue";
import Presenter from "../../../domain/group-maker/home/Presenter.vue";
import Absentee from "../../../domain/group-maker/home/Absentee.vue";
import { useStudentsStore } from "@/stores/students";
import axios from "axios";
import { onMounted, ref } from "vue";
import { apiURLs } from "@utils/constantVariables";
import Team from "../../../domain/group-maker/home/Team.vue";
import { CheckedStudents } from "@/types/types";

const studentsStore = useStudentsStore();
const presenter = ref<CheckedStudents[]>([]);
const absentees = ref<CheckedStudents[]>([]);
const numberOfGroup = ref<number>(1);

const getStudents = async () => {
  try {
    const response = await axios.get(apiURLs.STUDENT_URL);
    studentsStore.setStudents(response.data);
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};
onMounted(getStudents);

const setPresenter = (students: CheckedStudents[]) => {
  presenter.value = students;
};

const setAbsentees = (students: CheckedStudents[]) => {
  absentees.value = students;
};

const setNumberOfGroup = (number: number) => {
  numberOfGroup.value = number;
};

/**
 * グループの情報を送信
 */
const createGroup = () => {
  console.log("absentees", absentees.value);
  console.log("presenter", presenter.value);
  console.log("numberOfGroup", numberOfGroup.value);
};
</script>

<template>
  <Absentee @checked="setAbsentees" />

  <Presenter :absentees="absentees" @checked="setPresenter" />

  <Team :presenter="presenter" />

  <NumberOfGroup @update="setNumberOfGroup" />

  <!-- <router-link :to="{ name: 'GroupMakeResult' }" class="block text-center"> -->
  <Button @click="createGroup">グループを作成</Button>
  <!-- </router-link> -->
</template>
