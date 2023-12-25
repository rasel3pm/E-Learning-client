import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnrollSuccess from "./components/common/EnrollSuccess.jsx";
import NotFound from "./components/common/NotFound.jsx";
import AllCourses from "./components/course/AllCourses.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import CategoryCoursePage from "./pages/CategoryCoursePage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LessonModulePage from "./pages/LessonModulePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/my-course" element={<LessonModulePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        <Route
          path="/course-by-category/:id"
          element={<CategoryCoursePage />}
        />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/enroll-success" element={<EnrollSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
