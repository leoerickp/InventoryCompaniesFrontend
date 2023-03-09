import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { companiesSlice } from './slices/companies/companiesSlice';
import { itemsSlice } from "./slices/items/itemsSlice";
import { usersSlice } from "./slices/users/usersSlice";
export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        companies: companiesSlice.reducer,
        items: itemsSlice.reducer,
        users: usersSlice.reducer,
    },
});