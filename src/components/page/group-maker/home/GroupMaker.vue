<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import GroupNumber from "./GroupNumber.vue";
import Facilitator from "./Facilitator.vue";
import Presenter from "./Presenter.vue";
import Absentee from "./Absentee.vue";
import { useStudentsStore } from "@/stores/students";
import axios from "axios";
import { onMounted } from "vue";
import { apiURLs } from "@utils/constantVariables";
import Team from "./Team.vue";

const studentsStore = useStudentsStore();

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
</script>

<template>
  <Absentee />

  <Presenter />

  <Team />

  <GroupNumber />

  <Facilitator />

  <router-link :to="{ name: 'GroupMakeResult' }" class="block text-center">
    <Button @click="createGroup">グループを作成</Button>
  </router-link>
</template>
