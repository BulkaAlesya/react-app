import styled from 'styled-components';
import { ActionButton, CustomInput } from '../common/common.styled-components';

export const Background = styled.div`
  position: absolute;
  top: 20px;
  height: 320px;
  width: 75%;
  left: 15%;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://dailysuperheroes.com/wp-content/uploads/2019/09/Marvel-posters.jpg");
  background-size: cover;
`;

export const AddButton = styled(ActionButton)`
  background-color: #555555;
  color: #f65261;
  opacity: 0.7;
  position: absolute;
  right: 3%;
  top: 15px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    border: solid 2px #f65261;
    opacity: 0.4;
  }
`;

export const SearchFormContainer = styled.div`
  display: flex;
  margin-top: 150px;
  justify-content: center;
`;

export const SearchButton = styled(ActionButton)`
  background-color: #f65261;
  color: white;
  width: 150px;
  letter-spacing: 2px;
  &:hover {
    background-color: none;
    opacity: 0.7;
  }
  &:active {
    border: solid 1px #FFFFFF;
  }
`;

export const SearchInput = styled(CustomInput)`
  margin-right: 10px;
`;

export const HeaderLabel = styled.div`
  color: #FFFFFFbd;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 200;
  position: absolute;
  top: 110px;
  left: 200px;
`;