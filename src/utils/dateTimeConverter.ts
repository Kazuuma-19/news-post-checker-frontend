import { DateTime } from "luxon";
/**
 * 日付を日本語に変換する
 * @param {string} dateTime
 * @returns 日本語に変換した日付
 */
export const convertDateTime = (dateTime: string) => {
  return DateTime.fromISO(dateTime, {
    zone: "Asia/Tokyo",
  })
    .setLocale("ja")
    .toFormat("yyyy/M/d(EEE) HH:mm");
};
