<script setup>
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { DateTime } from "luxon";

const props = defineProps(["data", "selectedTab"]);

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
/**
 * 日付を日本語に変換する
 * @param {string} dateTime
 * @returns 日本語に変換した日付
 */
const convertDateTime = (dateTime) => {
  return DateTime.fromISO(dateTime, {
    zone: "Asia/Tokyo",
  })
    .setLocale("ja")
    .toFormat("yyyy/M/d(EEE) HH:mm");
};
</script>

<template>
  <fwb-table class="my-8">
    <fwb-table-head>
      <fwb-table-head-cell>Grade</fwb-table-head-cell>
      <fwb-table-head-cell>Name</fwb-table-head-cell>
      <fwb-table-head-cell>Count</fwb-table-head-cell>
      <fwb-table-head-cell>Date</fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body>
      <fwb-table-row v-for="post in props.data" :key="post.id">
        <fwb-table-cell>{{ convertGrade(post.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ post.name }}</fwb-table-cell>
        <fwb-table-cell>{{ post[selectedTab].count }}</fwb-table-cell>
        <fwb-table-cell>
          <div v-for="(date, index) in post[selectedTab].dateTime" :key="index">
            {{ convertDateTime(date) }}
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>
