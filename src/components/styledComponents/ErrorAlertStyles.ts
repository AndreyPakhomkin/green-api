import styled from "styled-components";

export const Alert = styled.div`
    position: absolute;
    top: 3%;
    left: 50%;
    right: 50%;
    min-width: 15vw;
    width: 400px;
    height: fit-content;
    border-radius: 15px;
    background-color: rgb(255, 196, 196);
    font-size: 16px;
    color: #41525d;
    text-align: center;
    z-index: 1;
    padding: 10px;
    transition: 0.3sec;
`;