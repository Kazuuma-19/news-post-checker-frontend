<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import GroupNumber from "../../../domain/group-maker/home/GroupNumber.vue";
import Presenter from "../../../domain/group-maker/home/Presenter.vue";
import Absentee from "../../../domain/group-maker/home/Absentee.vue";
import { useStudentsStore } from "@/stores/students";
import axios from "axios";
import { onMounted, ref } from "vue";
import { apiURLs } from "@utils/constantVariables";
import Team from "../../../domain/group-maker/home/Team.vue";
import { CheckedStudents } from "@/types/types";

const studentsStore = useStudentsStore();
const checkedStudents = ref<CheckedStudents[]>([]);

const getStudents = async () => {
  try {
    const response = await axios.get(apiURLs.STUDENT_URL);
    studentsStore.setStudents(response.data);
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};
onMounted(getStudents);

const createGroup = () => {
  console.log("Group created");
};

const setCheckedStudents = (students: CheckedStudents[]) => {
  checkedStudents.value = students;
};
</script>

<template>
  <Absentee />

  <Presenter @checked="setCheckedStudents" />

  <Team :checked-students="checkedStudents" />

  <GroupNumber />

  <router-link :to="{ name: 'GroupMakeResult' }" class="block text-center">
    <Button @click="createGroup">グループを作成</Button>
  </router-link>
</template>
