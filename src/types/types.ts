export type Grade = "FIRST_YEAR" | "SECOND_YEAR" | "THIRD_YEAR" | "FOURTH_YEAR";

export type NewsPost = {
  id: number;
  name: string;
  grade: Grade;
  active: boolean;
  created_at: string;
  updated_at: string;
  reply: {
    count: number;
    dateTime?: string[];
  };
  post: {
    count: number;
    dateTime?: string[];
  };
};

export type Student = {
  id: number;
  name: string;
  grade: Grade;
  active: boolean;
};

export type CheckedStudents = Omit<Student, "active" | "grade"> & {
  checked?: boolean;
};
