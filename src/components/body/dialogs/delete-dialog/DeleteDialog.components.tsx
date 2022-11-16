import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './DeleteDialog.css';
import { ConfirmationButton } from '../../../common/common.styled-components';

export const ConfirmationLabel = styled.div`
  color: #FFFFFFbd;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 400;
  position: absolute;
  top: 110px;
  & > span {
    color: #f65261;
    font-weight: 600;
  }
`;

const DeleteDialogComponent = ({movie}) => {
  return (
    <>
      <ConfirmationLabel>Are you sure you want to delete <span>{movie.name}</span> movie?</ConfirmationLabel>
      <div className='add-edit-button-panel'>
        <ConfirmationButton type="submit">Delete</ConfirmationButton>
      </div> 
    </>);
}
export default DeleteDialogComponent;

DeleteDialogComponent.propTypes = {
  movie: PropTypes.object
}