import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export const ConfirmationButton = styled(ActionButton)`
  width: 150px;
  height: 40px;
  background-color: #f65261;
  font-size: 16px;
  color: #ffffff96;
`;
export const ResetButton = styled(ActionButton)`
  width: 150px;
  height: 40px;
  color: #f65261;
  border: 1px solid #f65261;
  font-size: 16px;
  background-color: inherit;
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
  width: ${(props) => (`${props.widthPercent}%`)};
  height: 30px;
  color: #ffffff96;
  &:focus {
    outline: none;
  }
`;
CustomInput.propTypes = {
  widthPercent: PropTypes.number
}
