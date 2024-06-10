import { useState, useEffect } from "react";
import { getCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const token = getCookie("token");
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/course`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message || "Something went wrong");
      setLoading(false);
    }
    setLoading(false);
    setCourses(data);
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error fetching courses: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Course List</h2>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course: any) => (
          <div key={course.id} className="bg-white shadow p-4 rounded-lg">
            <h3 className="font-semibold">{course.name}</h3>
            <p>{course.description}</p>
            <small>
              Starts: {new Date(course.startDate).toLocaleDateString()}
            </small>
            <br />
            <small>Ends: {new Date(course.endDate).toLocaleDateString()}</small>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out flex justify-end"
              onClick={() => navigate(`/course-update/${course.id}`)}
            >
              Update the course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
