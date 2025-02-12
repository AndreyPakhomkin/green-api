import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 25vw;
  height: 100%;
  border-right: 1px solid #d0d2d3;
  background: white;
  overflow: hidden;
`;

export const ChatsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6vw 0.6vw 0.6vw;
`;

export const TitleBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  width: 95%;
  height: 35px;
  background: #f0f2f5;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 35px;
  background: #f0f2f5;
  outline: none;
  border: none;
  padding: 0;
  font-size: 16px;
  color: #41525d;
`;

export const List = styled.ul`
  width: 100%;
  height: 93%;
  padding: 0;
  margin: 0;
  overflow-y: visible;
`;