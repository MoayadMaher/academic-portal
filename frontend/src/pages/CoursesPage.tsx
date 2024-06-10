import CourseList from "../components/CourseList";

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl font-semibold my-6">Courses</h1>
      <CourseList />
    </div>
  );
};

export default CoursesPage;
