import { createSlice } from "@reduxjs/toolkit";
import { CompanyDataType } from "../../../inventory/interfaces/company-data-type.interface";
interface InitialStateCompaniesState {
    isLoading: boolean;
    dataSource: CompanyDataType[];
    count: number;
    errorMessage: any;
    limit: number;
    offset: number;
    canGetData: boolean;
    successMessage: string;
}
const initialState: InitialStateCompaniesState = {
    isLoading: false,
    dataSource: [],
    count: 0,
    errorMessage: null,
    limit: 10,
    offset: 0,
    canGetData: false,
    successMessage: '',
}
export const companiesSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.successMessage = '';
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDataSource: (state, action) => {
            const { count, companies } = action.payload;
            state.dataSource = companies;
            state.count = count;
            state.isLoading = false;
            state.canGetData = false;
        },
        createData: (state, action) => {
            state.dataSource = [...state.dataSource, action.payload];
        },
        updateData: (state, action) => {
            const { id, updatedData } = action.payload;
            state.dataSource = state.dataSource.map((value) => {
                if (value.NIT === id) {
                    return { ...value, ...updatedData };
                }
                return value;
            });
        },
        removeData: (state, action) => {
            const { id } = action.payload;
            state.dataSource = state.dataSource.filter((data: any) => data.NIT !== id);
            state.canGetData = true;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        throwError: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        setCanGetData: (state, action) => {
            state.canGetData = action.payload;
        },
        eraseErrorMessage: (state) => {
            state.errorMessage = null;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        }
    },
});

export const {
    eraseErrorMessage,
    startLoading,
    stopLoading,
    setDataSource,
    createData,
    updateData,
    throwError,
    setLimit,
    setOffset,
    setCanGetData,
    setSuccessMessage,
    removeData
} = companiesSlice.actions;
