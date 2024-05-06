<script setup lang="ts">
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { DateTime } from "luxon";
import { Grade } from "../../../types/types";

const props = defineProps(["data"]);

/**
 * enum型の学年を日本語に変換する
 * @param {string} grade
 */
const convertGrade = (grade: Grade) => {
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
const convertDateTime = (dateTime: string) => {
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
      <fwb-table-head-cell>学年</fwb-table-head-cell>
      <fwb-table-head-cell>名前</fwb-table-head-cell>
      <fwb-table-head-cell>投稿数</fwb-table-head-cell>
      <fwb-table-head-cell>投稿日時</fwb-table-head-cell>
      <fwb-table-head-cell>返信数</fwb-table-head-cell>
      <fwb-table-head-cell>返信日時</fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body>
      <fwb-table-row v-for="post in props.data" :key="post.id">
        <fwb-table-cell>{{ convertGrade(post.grade) }}</fwb-table-cell>
        <fwb-table-cell>{{ post.name }}</fwb-table-cell>
        <fwb-table-cell>{{ post.post.count }}</fwb-table-cell>
        <fwb-table-cell>
          <div v-for="(date, index) in post.post.dateTime" :key="index">
            {{ convertDateTime(date) }}
          </div>
        </fwb-table-cell>
        <fwb-table-cell>{{ post.reply.count }}</fwb-table-cell>
        <fwb-table-cell>
          <div v-for="(date, index) in post.reply.dateTime" :key="index">
            {{ convertDateTime(date) }}
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>
