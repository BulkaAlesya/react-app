import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchDropdownButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  display: inline-block;
  height: 32px;
  color: #ffffff61;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
export const DropdownIcon = styled(FontAwesomeIcon)`
  color: #f65261;
  margin: 0 10px 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownItemsContainer = styled.div<DropdownItemsContainerProps>`
  display: ${props => props.isOpen ? 'block' : ' none'};
  position: absolute; 
  background-color: #424242;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

interface DropdownItemsContainerProps {
  isOpen: boolean;
}

export const DropdownItem = styled.div`
  height: 20px;
  color: #ffffff61;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  border-bottom: 1px solid #ffffff61;
  padding-left: 10%;
  &:hover {
    color: #f65261;
    cursor: pointer;
  }
`;
