import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useApiHandleNotification } from "../../common/hooks/useApiHandleNotification";

export const useHandlePageMessagesEvent = ({ sliceSource, createPath, nameState, getData, idParent }: any) => {
    const { eraseErrorMessage, setSuccessMessage } = sliceSource;

    const { ApiErrorNotification } = useApiHandleNotification();

    const { errorMessage, canGetData, limit, offset, successMessage } =
        useSelector((state: any) => state[nameState]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (errorMessage) {
            ApiErrorNotification(errorMessage);
            dispatch(eraseErrorMessage());
        }
    }, [errorMessage]);

    useEffect(() => {
        if (canGetData) {
            if (idParent) dispatch(getData(idParent, limit, offset));
            else dispatch(getData(limit, offset));
        }
    }, [canGetData]);

    useEffect(() => {
        if (successMessage.length > 0) {
            message.success(successMessage, 2);
            dispatch(setSuccessMessage(""));
        }
    }, [successMessage]);

    const createNewButtonEvent = () => {
        navigate(createPath);
    };
    return { createNewButtonEvent }
}