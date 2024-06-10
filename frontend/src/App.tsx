import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import { CourseProvider } from "./context/CourseContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateCoursePage from "./pages/CreateCoursePage";
import UpdateCoursePage from "./pages/UpdateCoursePage";
import CoursesPage from "./pages/CoursesPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/course-create" element={<CreateCoursePage />} />
            <Route path="/course-update/:id" element={<UpdateCoursePage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
