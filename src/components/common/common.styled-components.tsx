import styled from 'styled-components';

export const ActionButton = styled.button`
  width: 106px;
  height: 30px;
  text-transform: uppercase;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  border: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;
export const CustomInput = styled.input`
  background-color: #1a1a1a;
  font-family: 'Quicksand', sans-serif;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 15px;
  letter-spacing: 1px;
  opacity: 0.8;
  width: 60%;
  height: 30px;
  color: #ffffff96;
  &:focus {
    outline: none;
  }
`;
