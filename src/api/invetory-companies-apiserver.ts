import axios from "axios";
import { URL_BASE } from "../config/config";
import { getTokenFromLocalStorage } from "../helpers/get-token";
export const configHeaders = () => {
    const token = getTokenFromLocalStorage();
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
            'Access-Control-Allow-Credentials': true,
        },
    };
}
export const inventoryCompaniesApiServer = axios.create({
    baseURL: `${URL_BASE}/api`,
});