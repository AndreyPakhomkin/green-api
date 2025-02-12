import React from 'react';
import { Header, Body, Wrapper } from './styledComponents/ContentWrapperStyles';
import MessangerInterface from './MessangerInterface';
import ErrorAlert from './ErrorAlert';


const ContentWrapper: React.FC = () => {
    return (
        <Wrapper>
            <ErrorAlert />
            <Header />
            <Body>
                <MessangerInterface />
            </Body>
        </Wrapper>
    );
};

export default ContentWrapper;
