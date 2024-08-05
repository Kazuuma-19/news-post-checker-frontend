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
      return this.students.reduce<Record<string, Student[]>>(
        (groups, student) => {
          if (!groups[student.grade]) {
            groups[student.grade] = [];
          }
          groups[student.grade].push(student);
          return groups;
        },
        {},
      );
    },
  },
  actions: {
    setStudents(students: Student[]) {
      this.students = students;
    },
  },
});
