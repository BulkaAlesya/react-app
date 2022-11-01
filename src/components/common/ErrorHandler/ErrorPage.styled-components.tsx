import styled from 'styled-components';
import { BodyBlock } from '../../body/BodyContainer.styled-components';
import { ActionButton } from '../common.styled-components';

export const GoBackTitle = styled.span`
  color: #ffffff61;
  font-size: '15px';
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
`;

export const NotFoundContainer = styled(BodyBlock)`
  top: 100px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 100px;

`;
export const GoBackButton = styled(ActionButton)`
  width: 400px;
  height: 100%;
  background-color: inherit;
  border: solid #F65251 1px;
`;

export const NotFoundTextBox = styled.div`
  padding: 70px 0 30px;
  width: 100%;
  text-align: center;
  font-size: 200px;
  font-family: 'Press Start 2P', cursive;
  color: #555555;
`;
