import React from "react";

import { Icon } from "components/styledComponents/ChatList/HeaderStyles";
import { Footer, Input } from "components/styledComponents/Chat/ChatInputStyles";

import plusIcon from '../../img/icons/plus-icon.png';
import sendIcon from '../../img/icons/send-icon.png';

const ChatInput: React.FC = () => {
    return (
        <Footer>
            <Icon src={plusIcon}></Icon>
            <Input></Input>
            <Icon src={sendIcon}></Icon>
        </Footer>
    )
}

export default ChatInput