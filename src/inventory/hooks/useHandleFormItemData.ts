import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, createItem } from '../../store/slices/items/thunks';

export const useHandleFormItemData = (NIT: string) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { dataSource } = useSelector((state: any) => state.items);
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(
        id ? dataSource.find((data: any) => data.id === id) : undefined
    );



    const onFinish = (values: any) => {
        if (id) dispatch(updateItem(id, values));
        else dispatch(createItem({ ...values, NIT }));
        navigate(-1);
    };
    return { onFinish, initialValues }
}