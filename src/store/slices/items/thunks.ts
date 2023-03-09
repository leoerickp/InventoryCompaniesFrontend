import { createData, getData, getDataByParent, removeData, updateData } from "../../../helpers/thunks-actions";
import * as itemsSlice from './itemsSlice';


const apiUrl = '/items';
export const getItems = (NIT: string, limit: number, offset: number): any => {
    return getDataByParent(`${apiUrl}/by-nit`, itemsSlice, NIT, { limit, offset });
};

export const createItem = (newData: any): any => {
    return createData(apiUrl, itemsSlice, newData);
};

export const updateItem = (id: string, updatedData: any): any => {
    return updateData(apiUrl, itemsSlice, id, updatedData);
};

export const removeItem = (id: string): any => {
    return removeData(apiUrl, itemsSlice, id);
};