import { Grade } from "../types/types";

/**
 * enum型の学年を日本語に変換する
 * @param {string} grade
 */
export const convertGrade = (grade: Grade): string => {
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
 * 学年のオプションを取得する
 */
export const getGradeOptions = () => {
  const grades: Grade[] = [
    "FIRST_YEAR",
    "SECOND_YEAR",
    "THIRD_YEAR",
    "FOURTH_YEAR",
  ];
  return grades.map((grade) => ({ value: grade, name: convertGrade(grade) }));
};
