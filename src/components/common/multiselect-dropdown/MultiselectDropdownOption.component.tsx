import React from 'react';
import { CustomInput } from '../common.styled-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faCheckSquare, faSortDown, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Option = styled.div`
  width: 93%;
  height: 40px;
  background-color: #1a1a1a;
  color: #FFFFFF96;
  z-index: 999
  > span {
    text-decoration: uppercase;
  }
`;

const Checkmark = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 10px;
  color: ${(props) => (props.checked ? '#f65265' : '#FFFFFF96')};
  background-color: #1a1a1a;
`;
Checkmark.propTypes = {
  checked: PropTypes.bool
}
const DropdownOption = ({value, title, isChecked, onClick }) => {
  return (
    <Option onClick={()=> onClick(value)}>
      <Checkmark icon={isChecked ? faCheckSquare : faSquare} checked={isChecked}></Checkmark>
      <span>{title}</span>
    </Option>
  );
}
export default DropdownOption;

DropdownOption.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
}
