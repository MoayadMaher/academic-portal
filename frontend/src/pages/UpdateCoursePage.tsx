import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseForm from "../components/CourseForm";
import { useAuth } from "../context/AuthContext";
import { Course } from "../types";
import { getCookie } from "react-use-cookie";

const UpdateCoursePage = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [secussflag, setSecussflag] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = getCookie("token");
  const { id } = useParams();

  useEffect(() => {
    if (!user || user.role !== "TEACHER") {
      console.error("User is not a teacher");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/course/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchData();
  }, [id, navigate, token, user]);

  const handleUpdate = async (formData: Course) => {
    const courseData = {
      id,
      name: formData.name,
      description: formData.description,
      startDate: formData.startDate,
      endDate: formData.endDate,
      teacherId: user?.userId,
    };
    await fetch(`${import.meta.env.VITE_API_URL}/course`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => {
        if (res.ok) {
          setSecussflag(true);
        }
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };

  if (!course) {
    return (
      <h1 className="text-center text-2xl font-bold my-4">Course not found</h1>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Update Course</h1>
      <CourseForm initialData={course} onSubmit={handleUpdate} />
      {secussflag && (
        <div className="text-center text-green-500 font-bold my-4">
          Course updated successfully
        </div>
      )}
    </div>
  );
};

export default UpdateCoursePage;
