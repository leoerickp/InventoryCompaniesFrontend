import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "../common/pages/Error404";
import { FooterBar } from "../inventory/layouts/FooterBar";
import { HeaderBar } from "../inventory/layouts/HeaderBar";
import { CompaniesPage } from "../inventory/pages/CompaniesPage";
import { LogoutPage } from "../auth/pages/LogoutPage";
import { ProfilePage } from "../inventory/pages/ProfilePage";
import { ItemsPage } from "../inventory/pages/ItemsPage";
import { useSelector } from "react-redux";
import { AdminRouter } from "./AdminRouter";

export const PrivateRouter = () => {
  const { isAdmin } = useSelector((state: any) => state.auth);
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderBar />
      <Layout style={{ padding: "0% 5%", overflow: "auto" }}>
        <Content
          style={{
            margin: "10px 10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/auth/*" element={<Navigate to="/" />} />
            <Route path="/" element={<CompaniesPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/items/:NIT" element={<ItemsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/logout" element={<LogoutPage />} />
            {isAdmin && <Route path="/*" element={<AdminRouter />} />}
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Content>
      </Layout>
      <FooterBar />
    </Layout>
  );
};
