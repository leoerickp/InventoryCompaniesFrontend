import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { SignUpPage } from "../auth/pages/SignUpPage";
import { LogoutPage } from "../auth/pages/LogoutPage";
import { Error404 } from "../common/pages/Error404";

export const PublicRoutes = () => {
  return (
    <div className="auth-container">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
};
