import React from 'react';
import Welcome from './Welcome';
import CurrentChat from './CurrentChat';

interface ChatProps {
    activeChat: boolean,
    userLogin: boolean
}

const Chat: React.FC<ChatProps> = ({ activeChat, userLogin }) => {

    if (!userLogin) {
        return (
            <Welcome />
        )
    }

    return activeChat ? <CurrentChat activeChat={activeChat} /> : null;
};

export default Chat;