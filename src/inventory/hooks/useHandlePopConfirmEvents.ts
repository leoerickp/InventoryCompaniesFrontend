import { useState } from "react";

export const useHandlePopConfirmEvents = (callBackToDelete: CallableFunction) => {
    const [open, setOpen] = useState(false);

    const showPopconfirm = () => {
        setOpen(true);
    };

    const confirm = async () => {
        callBackToDelete();
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) {
            setOpen(newOpen);
            return;
        }
        setOpen(newOpen);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return {
        confirm,
        handleCancel,
        handleOpenChange,
        open,
        showPopconfirm,
    }
}