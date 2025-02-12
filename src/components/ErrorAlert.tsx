import React from "react";
import { useAppSelector } from "store/hooks";
import { Alert } from "./styledComponents/ErrorAlertStyles";

const ErrorAlert: React.FC = () => {
    const { status: errorStatus, errorMessage } = useAppSelector(state => state.error)

    if (errorStatus && errorMessage) {
        return (
            <Alert>
                Неверный номер телефона или аккаунт не авторизован в WhatsApp
            </Alert>
        )
    } else {
        return null
    }

}

export default ErrorAlert