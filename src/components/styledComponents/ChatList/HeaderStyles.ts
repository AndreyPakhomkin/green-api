import { styled } from 'styled-components';

export const Header = styled.header`
    width: 3.5vw;
    min-width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #d0d2d3;
`;

export const NavBar = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const SettingsBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: fit-content;
    align-items: center;
`;

export const Icon = styled.img`
    // height: 1.2vw;
    // width: 1.2vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
    padding: 0.8vw;
`;