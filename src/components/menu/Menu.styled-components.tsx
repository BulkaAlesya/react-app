import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MenuContainer = styled.div`
  width: 75%;
  left: 15%;
  height: 30px;
  border-bottom: 2px solid #424242;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 370px;
`;
export const MenuPagePanel = styled.div`
  width: 40%;
  height: 50px;
  position: relative;
`;

export const MenuPageItem = styled.button`
  background-color: inherit;
  border: none;
  text-transform: uppercase;
  font-size: 13px;
  height: 32px;
  color: #ffffff61;
  font-family: 'Quicksand', sans-serif;
  border-bottom: ${(props) => props.active ? 'solid #f65261 3px' : ''};
  &:hover { 
    cursor: pointer;
  }
`;
MenuPageItem.propTypes = {
  active: PropTypes.bool
}

export const ConfigurationPanel = styled.div`
  width: 40%;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: end;
    & span {
      padding: 7px;
      font-family: 'Quicksand', sans-serif;
      font-size: 13px;
      text-transform: uppercase;
      color: #ffffffc9;
    }
`;
export const Separator = styled.div`
  width: 75%;
  left: 15%;
  height: 3px;
  background-color: #000000;
  top: 370px;
  position: relative;
`;

export const MenuItem = styled.div`
`;
