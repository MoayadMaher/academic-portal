export interface User {
  id: string;
  name: string;
  email: string;
  role: "STUDENT" | "TEACHER";
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  teacherId: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: UserCredentials) => void;
  logout: () => void;
}

export interface CourseContextType {
  courses: Course[];
}
