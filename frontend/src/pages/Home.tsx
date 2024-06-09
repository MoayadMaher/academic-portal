import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  console.log("User:", user);
  // see all courses
  return <div className="container mx-auto px-4">home</div>;
};

export default Home;
