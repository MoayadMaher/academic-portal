import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        {user && user.role === "TEACHER" && (
          <li>
            <Link to="/course-create" className="hover:text-gray-300">
              Create Course
            </Link>
          </li>
        )}
        <li>
          <Link to="/courses" className="hover:text-gray-300">
            Courses
          </Link>
        </li>
        {user ? (
          <li>
            <a href="#" className="hover:text-gray-300" onClick={handleLogout}>
              Logout
            </a>
          </li>
        ) : (
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
