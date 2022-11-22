import React, { useState } from 'react';
import { CustomInput } from '../common.styled-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InputTitle = styled.div`
  color: #f65261;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  margin: 10px 0;
`;

const Input = styled(CustomInput)`
  background-color: #424242;
  opacity: 0.7;
  height: 40px;
  ::-webkit-calendar-picker-indicator {
    display: block;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="%23f65261" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>');
    width: 20px;
    height: 20px;
    border-width: thin;
  }
`;

const InputComponent = ({value, title, placeholder, widthPercent, type }) => {
  const [inputValue, onValueChange] = useState(value);
  return (
    <>
      <InputTitle> {title} </InputTitle>
      <Input value={inputValue} widthPercent={widthPercent} type={type} placeholder={placeholder} onChange={e => onValueChange(e.target.value)}/>
    </>
  );
}
export default InputComponent;

InputComponent.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  widthPercent: PropTypes.number,
  type: PropTypes.string,
}