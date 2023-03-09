import { createData, getData, removeData, updateData } from "../../../helpers/thunks-actions";
import * as usersSlice from './usersSlice';


const apiUrl = '/users';
export const getUsers = (limit: number, offset: number): any => {
    return getData(apiUrl, usersSlice, { limit, offset });
};

export const createUser = (newData: any): any => {
    return createData(apiUrl, usersSlice, newData);
};

export const updateUser = (id: string, updatedData: any): any => {
    return updateData(apiUrl, usersSlice, id, updatedData);
};

export const removeUser = (id: string): any => {
    return removeData(apiUrl, usersSlice, id);
};