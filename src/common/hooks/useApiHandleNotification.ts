import { useAppContext } from "../../contexts/appcontext/AppContext";

export const useApiHandleNotification = () => {
    const { errorNotification } = useAppContext();
    const ApiErrorNotification = ({ statusText, statuscode, message }: any) => {
        errorNotification(
            `Login error: ${statusText}`,
            `Statuscode: ${statuscode} - message: ${message}`
        );
    }
    return { ApiErrorNotification }
}