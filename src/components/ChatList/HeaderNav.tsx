import React from 'react';
import { Header, NavBar, SettingsBar, Icon } from '../styledComponents/ChatList/HeaderStyles';

import chatIcon from '../../img/icons/chat-icon.png';
import storiesIcon from '../../img/icons/stories-icon.png';
import contactsIcon from '../../img/icons/contacts-icon.png';
import settingIcon from '../../img/icons/settings-icon.png';
import userIcon from '../../img/icons/user-icon.jpg';

const HeaderNav: React.FC = () => {
    return (
        <Header>
            <NavBar>
                <Icon src={chatIcon} alt="Чаты" />
                <Icon src={storiesIcon} alt="Истории" />
                <Icon src={contactsIcon} alt="Контакты" />
            </NavBar>
            <SettingsBar>
                <Icon src={settingIcon} alt="Настройки" />
                <Icon src={userIcon} alt="Профиль" />
            </SettingsBar>
        </Header>
    );
};

export default HeaderNav;