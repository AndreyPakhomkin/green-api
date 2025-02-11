import styled from "styled-components";
import { MessagesProps } from '../../../types/chat';

export const Chat = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #41525d;
    text-align: center;
`;

export const ChatHeader = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #41525d;
    text-align: center;
`;

export const Messages = styled.div<MessagesProps>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$background});
    background-size: auto;
    background-blend-mode: soft-light;
    background-color: #eae6df;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #41525d;
    text-align: center;
    overflow-y: auto;
`;