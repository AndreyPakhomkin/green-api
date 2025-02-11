import React from 'react';
import { Wrap, ChatsHeader, List, TitleBtns, Search, SearchInput } from 'components/styledComponents/ChatList/ChatsListStyles';
import { Icon } from 'components/styledComponents/ChatList/HeaderStyles';

import newChatIcon from '../../img/icons/new-chat-icon.png';
import menuIcon from '../../img/icons/menu-icon.png';
import searchIcon from '../../img/icons/search-icon.png';

const ChatsList: React.FC = () => {
    return (
        <Wrap>
            <ChatsHeader>
                <TitleBtns>
                    <h2>Чаты</h2>
                    <div>
                        <Icon src={newChatIcon} alt="Новый чат" title='newChat' />
                        <Icon src={menuIcon} alt="Меню" title='menuIcon' />
                    </div>
                </TitleBtns>
                <Search>
                    <img src={searchIcon} alt="Поиск" title='search' />
                    <SearchInput type='text' placeholder=' Поиск' />
                </Search>
            </ChatsHeader>
            <List />
        </Wrap>
    );
};

export default ChatsList;