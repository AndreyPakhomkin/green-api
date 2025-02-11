import React from 'react';
import { Header, Body, Wrapper } from './styledComponents/ContentWrapperStyles';
import MessangerInterface from './MessangerInterface';


const ContentWrapper: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Body>
                <MessangerInterface />
            </Body>
        </Wrapper>
    );
};

export default ContentWrapper;
