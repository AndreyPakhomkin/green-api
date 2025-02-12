import React from 'react';
import PhoneForm from './PhoneForm';
import CurrentChat from './CurrentChat';
import { useAppSelector } from 'store/hooks';

const Chat: React.FC = () => {

    const loggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    if (!loggedIn) {
        return (
            <PhoneForm />
        )
    } else return null

    // return activeChat ? <CurrentChat activeChat={activeChat} /> : null;
};

export default Chat;