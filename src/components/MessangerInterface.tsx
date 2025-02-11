import React, { useState } from 'react';
import ChatsList from './ChatList/ChatsList';
import Chat from './Chat/Chat';
import HeaderNav from './ChatList/HeaderNav';
import { Wrap } from './styledComponents/MessangerInterfaceStyles';

const MessangerInterface: React.FC = () => {
    const [activeChat, setActiveChat] = useState<boolean>(false)
    const [userLogin, setUserLogin] = useState<boolean>(true)



    return (
        <Wrap>
            <HeaderNav />
            <ChatsList />
            <Chat activeChat={activeChat} userLogin={userLogin} />
        </Wrap>
    );
};

export default MessangerInterface;