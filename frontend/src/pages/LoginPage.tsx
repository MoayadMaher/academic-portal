import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-4">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
