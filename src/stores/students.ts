import { Student } from "@/types/types";
import { defineStore } from "pinia";

export const useStudentsStore = defineStore("students", {
  state: () => {
    return {
      students: [] as Student[],
    };
  },
  getters: {
    groupStudentsByGrade(): Record<string, Student[]> {
      return Object.groupBy(this.students, (student) => student.grade);
    },
  },
  actions: {
    setStudents(students: Student[]) {
      this.students = students;
    },
  },
});
