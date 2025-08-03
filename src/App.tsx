import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
// import UserNavbar from "./components/user/UserNavbar";
// import AuthPage from "./features/auth/pages/AuthForm";

const App = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "user") {
      navigate("/");
    }
  }, [role]);

  return (
    <>
      <AppRouter />
      {/* <AuthPage />
      <UserNavbar/> */}
    </>
  );
};

export default App;
