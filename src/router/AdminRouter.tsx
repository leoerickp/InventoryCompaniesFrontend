import { Route, Routes } from "react-router-dom";
import { CompanyFormPage } from "../inventory/pages/CompanyFormPage";
import { ItemFormPage } from "../inventory/pages/ItemFormPage";
import { UserFormPage } from "../inventory/pages/UserFormPage";
import { UsersPage } from "../inventory/pages/UsersPage";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/companies/edit/:NIT" element={<CompanyFormPage />} />
      <Route path="/companies/create" element={<CompanyFormPage />} />
      <Route path="/items/edit/:id" element={<ItemFormPage />} />
      <Route path="/items/create/:NIT" element={<ItemFormPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/edit/:id" element={<UserFormPage />} />
    </Routes>
  );
};
