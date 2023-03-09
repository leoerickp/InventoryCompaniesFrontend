import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoutes } from "./PublicRouter";

export const AppRouter = () => {
  const { isLogged } = useSelector((state: any) => state.auth);
  return (
    <Routes>
      {!isLogged ? (
        <Route path="/auth/*" element={<PublicRoutes />} />
      ) : (
        <Route path="/*" element={<PrivateRouter />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
