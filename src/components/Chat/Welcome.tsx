import React from "react";
import { WelcomeDialog, Wrap, Btn, SubTitle } from "components/styledComponents/Chat/WelcomeStyles";
import { SearchInput } from "components/styledComponents/ChatList/ChatsListStyles";
import { Search } from "components/styledComponents/ChatList/ChatsListStyles";

const Welcome: React.FC = () => {
    return (
        <WelcomeDialog>
            <Wrap>
                <SubTitle>Введите номер телефона для начала работы</SubTitle>
                <Search>
                    <p>+7 </p>
                    <SearchInput type='text' placeholder=' Поиск' />
                </Search>
                <Btn>Начать</Btn>
            </Wrap>
        </WelcomeDialog>
    )
}

export default Welcome