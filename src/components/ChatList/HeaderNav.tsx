import React, { useEffect } from 'react';
import { Header, NavBar, SettingsBar, Icon } from '../styledComponents/ChatList/HeaderStyles';

import chatIcon from '../../img/icons/chat-icon.png';
import storiesIcon from '../../img/icons/stories-icon.png';
import contactsIcon from '../../img/icons/contacts-icon.png';
import settingIcon from '../../img/icons/settings-icon.png';
import userIcon from '../../img/icons/user-icon.jpg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setUser } from 'store/reducers/userSlice';

const HeaderNav: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userAvatar = useAppSelector(state => state.user.avatarUrl)

    useEffect(() => {
        if (isLoggedIn) {
            getUserData()
        }
    }, [isLoggedIn])

    const getUserData = async () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        const idInstance = process.env.REACT_APP_ID_INSTANCE;
        const apiTokenInstance = process.env.REACT_APP_API_TOKEN_INSTANCE;
        const maxAttempts = 5;
        const delayMs = 2500;

        const url = `${apiUrl}/waInstance${idInstance}/getWaSettings/${apiTokenInstance}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const response = await fetch(url, options);
                const data = await response.json();

                if (data?.avatar && data?.phone && data?.deviceId) {
                    dispatch(setUser(data));
                    return;
                }

                if (attempt < maxAttempts) {
                    await new Promise(resolve => setTimeout(resolve, delayMs));
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <Header>
            <NavBar>
                <Icon src={chatIcon} alt="Чаты" />
                <Icon src={storiesIcon} alt="Истории" />
                <Icon src={contactsIcon} alt="Контакты" />
            </NavBar>
            <SettingsBar>
                <Icon src={settingIcon} alt="Настройки" />
                <Icon src={userAvatar ? userAvatar : userIcon} alt="Профиль" />
            </SettingsBar>
        </Header>
    );
};

export default HeaderNav;