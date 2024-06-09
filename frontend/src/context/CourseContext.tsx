// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { Course, CourseContextType } from "../types";
// // import { fetchCourses } from "../services/courseService";
// const CourseContext = createContext<CourseContextType | undefined>(undefined);

// export const CourseProvider = ({ children }: { children: ReactNode }) => {
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     const loadData = async () => {
//       //  const data = await fetchCourses();
//       const data = "";
//       setCourses(data);
//     };
//     loadData();
//   }, []);

//   return (
//     <CourseContext.Provider value={{ courses }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// export const useCourses = (): Course[] => {
//   const context = useContext(CourseContext);
//   if (context === undefined) {
//     throw new Error("useCourses must be used within a CourseProvider");
//   }
//   return context.courses;
// };
