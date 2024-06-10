import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const user = useAuth();
  const navigate = useNavigate();
  if (user) {
    navigate("/courses");
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold my-4">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
