import React, { useState } from 'react';
import ChatsList from './ChatList/ChatsList';
import Chat from './Chat/Chat';
import HeaderNav from './ChatList/HeaderNav';
import { Wrap } from './styledComponents/MessangerInterfaceStyles';

const MessangerInterface: React.FC = () => {
    return (
        <Wrap>
            <HeaderNav />
            <ChatsList />
            <Chat />
        </Wrap>
    );
};

export default MessangerInterface;