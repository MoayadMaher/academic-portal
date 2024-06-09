import CourseForm from "../components/CourseForm";

const UpdateCoursePage = () => {
  // const { course } = location.state; // Assuming course data is passed via route state

  const handleUpdate = () => {
    // console.log("Updating course:", courseData);
    // API call to update course
  };

  const course = {
    name: "Math 101",
    description: "Introduction to Algebra",
    startDate: "2022-01-01",
    endDate: "2022-05-01",
    teacherId: "123",
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Update Course</h1>
      <CourseForm initialData={course} onSubmit={handleUpdate} />
    </div>
  );
};

export default UpdateCoursePage;
