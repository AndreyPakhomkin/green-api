import React, { useState, useEffect, useRef } from "react";
import { WelcomeDialog, Wrap, Btn, SubTitle, Title } from "components/styledComponents/Chat/PhoneForm";
import { SearchInput } from "components/styledComponents/ChatList/ChatsListStyles";
import { Search } from "components/styledComponents/ChatList/ChatsListStyles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { logIn } from "store/reducers/authSlice";
import { showErrorAlert } from "store/reducers/errorSlice";

const apiUrl = process.env.REACT_APP_API_URL;
const idInstance = process.env.REACT_APP_ID_INSTANCE;
const apiTokenInstance = process.env.REACT_APP_API_TOKEN_INSTANCE;

const PhoneForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [number, setNumber] = useState<string>("");
    const [loginCode, setLoginCode] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const onlyNumbers = value.replace(/[^\d]/g, '');
        setNumber(onlyNumbers);
    };

    const userLogIn = async () => {

        const url = `${apiUrl}/waInstance${idInstance}/getAuthorizationCode/${apiTokenInstance}`;
        const body = {
            "phoneNumber": Number("7" + number)
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(url, options)
            const data = await response.json()

            if (data.status) {
                const formattedCode = data.code.slice(0, 4) + '-' + data.code.slice(4);
                setLoginCode(formattedCode);
                intervalRef.current = setInterval(checkInstanceStatus, 2500);
            } else {
                dispatch(showErrorAlert('Ошибка авторизации: убедитесь, что ваш инстанс не активен'))
            }
        } catch (error) {
            console.error(error)
            dispatch(showErrorAlert('Ошибка при авторизации'))
        };
    };

    const checkInstanceStatus = async () => {

        const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options)
            const data = await response.json()

            if (data.stateInstance === "authorized") {
                dispatch(logIn());
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            }
        } catch (error) {
            console.error(error)
        };
    };

    return (
        <WelcomeDialog>
            {loginCode ?
                <Wrap>
                    <Title>{loginCode}</Title>
                    <SubTitle>Введите код на вашем устройстве</SubTitle>
                </Wrap>
                :
                <Wrap>
                    <SubTitle>Введите номер телефона для начала {loggedIn ? "диалога" : "работы"}</SubTitle>
                    <Search>
                        <p>+7 </p>
                        <SearchInput
                            type='text'
                            placeholder='999 999 99 99'
                            value={number}
                            onChange={handleNumberChange}
                        />
                    </Search>
                    <Btn onClick={() => userLogIn()}>Начать</Btn>
                </Wrap>
            }
        </WelcomeDialog>
    );
};

export default PhoneForm