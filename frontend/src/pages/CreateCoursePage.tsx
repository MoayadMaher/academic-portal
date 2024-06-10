import { getCookie } from "react-use-cookie";
import CourseForm from "../components/CourseForm";
import { useAuth } from "../context/AuthContext";
import { Course } from "../types";
import { useNavigate } from "react-router-dom";

const CreateCoursePage = () => {
  const token = getCookie("token");
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user || user.role !== "TEACHER") {
    console.error("User is not a teacher");
    navigate("/courses");
    return;
  }
  const handleCreate = async (course: Course) => {
    const courseData = {
      name: course.name,
      description: course.description,
      startDate: course.startDate,
      endDate: course.endDate,
      teacherId: user.userId,
    };
    await fetch(`${import.meta.env.VITE_API_URL}/course`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => {
        if (res.ok) navigate("/courses");
      })
      .catch((error) => {
        console.error("Error creating course:", error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Create New Course</h1>
      <CourseForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateCoursePage;
