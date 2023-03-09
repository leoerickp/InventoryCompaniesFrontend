import { createData, getData, removeData, updateData } from "../../../helpers/thunks-actions";
import * as companiesSlice from './companiesSlice';


const apiUrl = '/companies';
export const getCompanies = (limit: number, offset: number): any => {
    return getData(apiUrl, companiesSlice, { limit, offset });
};

export const createCompany = (newData: any): any => {
    return createData(apiUrl, companiesSlice, newData);
};

export const updateCompany = (NIT: string, updatedData: any): any => {
    return updateData(apiUrl, companiesSlice, NIT, updatedData);
};

export const removeCompany = (NIT: string): any => {
    return removeData(apiUrl, companiesSlice, NIT);
};