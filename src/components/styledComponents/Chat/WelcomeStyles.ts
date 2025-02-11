import styled from "styled-components"

export const WelcomeDialog = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #41525d;
    text-align: center;
`;

export const Image = styled.img`
    height: 188px;
    width: 320px;
`;

export const Title = styled.h1`
    font-family: "SF Pro Text";
    font-weight: 100;
    font-size: 36px;
    margin: 30px 20px;
`;

export const SubTitle = styled.p`
    font-family: "SF Pro Text";
    font-weight: 100;
    font-size: 14px;
    line-height: 130%;
`;

export const Btn = styled.div`
    height: 18px;
    width: 102px;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 19px;
    color: white;
    background-color: #008069;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
`;

export const Wrap = styled.div`
    height: 10vw;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 19px;
    background-color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
`;