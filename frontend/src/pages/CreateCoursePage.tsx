import CourseForm from "../components/CourseForm";

const CreateCoursePage = () => {
  const handleCreate = () => {
    // console.log("Creating course:", courseData);
    // API call to create course
  };

  const initialData = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    teacherId: "",
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Create New Course</h1>
      <CourseForm onSubmit={handleCreate} initialData={initialData} />
    </div>
  );
};

export default CreateCoursePage;
