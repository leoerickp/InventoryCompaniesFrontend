import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { configHeaders, inventoryCompaniesApiServer } from "../api/invetory-companies-apiserver";

export const getData = (url: string, sliceSource: any, pagination: any) => {
    const { limit, offset } = pagination;
    const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
    const { startLoading, setDataSource, throwError, setLimit, setOffset } = sliceSource;
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startLoading());

            const { data } = await inventoryCompaniesApiServer.get(
                `${url}${params}`,
                configHeaders()
            );
            dispatch(setLimit(limit));
            dispatch(setOffset(offset));
            dispatch(setDataSource(data));
        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}

export const getDataByParent = (url: string, sliceSource: any, idParent: any, pagination: any) => {
    const { limit, offset } = pagination;
    const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
    const { startLoading, setDataSource, throwError, setLimit, setOffset } = sliceSource;
    return async (dispatch: Dispatch<AnyAction>) => {
        try {

            dispatch(startLoading());
            const { data } = await inventoryCompaniesApiServer.get(
                `${url}/${idParent}${params}`,
                configHeaders()
            );
            dispatch(setLimit(limit));
            dispatch(setOffset(offset));
            dispatch(setDataSource({ ...data, idParent }));
        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}

export const updateData = (url: string, sliceSource: any, id: any, updatedData: any) => {
    const { startLoading, updateData, throwError, setSuccessMessage } = sliceSource;
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startLoading());
            const results = await inventoryCompaniesApiServer.put(
                `${url}/${id}`,
                updatedData,
                configHeaders()
            );
            dispatch(updateData({ id, updatedData: results.data }));
            dispatch(setSuccessMessage('The register was updated successfully!'));
        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}

export const removeData = (url: string, sliceSource: any, id: any) => {
    const { startLoading, stopLoading, throwError, setSuccessMessage, removeData } = sliceSource;
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startLoading());
            await inventoryCompaniesApiServer.delete(
                `${url}/${id}`,
                configHeaders()
            );
            dispatch(removeData(id));
            dispatch(stopLoading());
            dispatch(setSuccessMessage('The register was removed successfully!'));
        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}

export const createData = (url: string, sliceSource: any, newData: any) => {
    const { startLoading, createData, throwError, setSuccessMessage } = sliceSource;
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startLoading());
            const results = await inventoryCompaniesApiServer.post(
                `${url}`,
                newData,
                configHeaders()
            );
            dispatch(createData(results.data));
            dispatch(setSuccessMessage('The register was created successfully!'));
        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}