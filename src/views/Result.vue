<script setup>
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { usePostsStore } from "../stores/posts";

const posts = usePostsStore();
</script>

<template>
  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>Name</fwb-table-head-cell>
      <fwb-table-head-cell>Year</fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="post in posts.response" :key="post.name">
        <fwb-table-cell>{{ post.name }}</fwb-table-cell>
        <fwb-table-cell>{{ post.reply }}</fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>

  <router-link to="/">戻る</router-link>
</template>
