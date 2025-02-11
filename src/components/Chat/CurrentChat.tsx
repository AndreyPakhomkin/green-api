import React from 'react';
import { Chat, ChatHeader, Messages } from 'components/styledComponents/Chat/CurrentChatStyles';
import { Icon } from 'components/styledComponents/ChatList/HeaderStyles';
import { ChatProps } from '../../types/chat';

import userIcon from '../../img/icons/user-icon.jpg';
import chatBackground from '../../img/chat-background.png';
import ChatInput from './ChatInput';

const CurrentChat: React.FC<ChatProps> = (CurrentChat) => {
    return (
        <Chat>
            <ChatHeader>
                <div>
                    <Icon src={userIcon} alt='user-photo'></Icon>
                </div>
                <div>
                    <div>Username/PhoneNumber</div>
                </div>
            </ChatHeader>
            <Messages $background={chatBackground}></Messages>
            <ChatInput />
        </Chat>
    );
};

export default CurrentChat;