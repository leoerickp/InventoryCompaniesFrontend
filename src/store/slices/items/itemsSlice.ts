import { createSlice } from "@reduxjs/toolkit";
import { ItemDataType } from "../../../inventory/interfaces/item-data-type.interface";
interface InitialStateItemsState {
    isLoading: boolean;
    dataSource: ItemDataType[];
    count: number;
    errorMessage: any;
    limit: number;
    offset: number;
    canGetData: boolean;
    successMessage: string;
}
const initialState: InitialStateItemsState = {
    isLoading: false,
    dataSource: [],
    count: 0,
    errorMessage: null,
    limit: 10,
    offset: 0,
    canGetData: false,
    successMessage: ''
}
export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.successMessage = '';
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDataSource: (state, action) => {
            const { count, items } = action.payload;
            state.dataSource = items;
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
                if (value.id === id) {
                    return { ...value, ...updatedData };
                }
                return value;
            });
        },
        removeData: (state, action) => {
            const { id } = action.payload;
            state.dataSource = state.dataSource.filter((data: any) => data.id !== id);
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
} = itemsSlice.actions;
