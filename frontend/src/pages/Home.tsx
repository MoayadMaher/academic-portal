import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/modern_academic_portal.png";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {user ? (
          <div>
            <h1 className="text-white  text-7xl font-bold mb-5">
              Welcome back, {user.name}
            </h1>
            <Link
              to="/courses"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              View Courses &rarr;
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-white  text-7xl font-bold mb-5">
              Welcome to Modern Academic Portal
            </h1>
            <div className="space-x-4 ">
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
