import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import { store } from '../../../api/configureStore';
import { ConfirmationButton, ResetButton } from '../../../common/common.styled-components';
import { GenreItem } from '../../../common/input/GenreItemList';
import InputComponent from '../../../common/input/Input.component';
import MultiselectDropdownComponent from '../../../common/multiselect-dropdown/MultiselectDropdownInput.component';
import { Movie } from '../../movie-list';
import './AddDialog.css';

const FormContainer = styled.div`
  display: flex;
  > div:first-child {
    flex: 0.7;
  }
  > div:last-child {
    flex: 0.3;
  }
`;
const AddDialogComponent = ({movie}) => {
  const [movieObject, updateValue] = useState(movie);
  const genreList = GenreItem.getListOfItems(store.getState().value);
  return (
    <>
      <FormContainer>
        <div> 
          <InputComponent widthPercent={90} title="Title" type={"name"} value={movieObject.title}></InputComponent>
          <InputComponent 
            value={movieObject.poster_path}
            widthPercent={90} 
            placeholder="https://" 
            title="Movie url" 
            type={"name"} >
          </InputComponent>
          <MultiselectDropdownComponent 
            value={movieObject.genres}
            optionsList={genreList}
            placeholder="Select Genre"
            widthPercent={93}
            title="Genre" >
          </MultiselectDropdownComponent>
        </div> 
        <div> 
          <InputComponent value={movieObject.release_date} widthPercent={90} placeholder="Select Date" title="Year" type={"date"}></InputComponent>
          <InputComponent value={movieObject.vote_average} widthPercent={90} placeholder="7.8" title="Rating" type={"name"} ></InputComponent>
          <InputComponent value={movieObject.runtime} widthPercent={90} placeholder="minutes" title="Runtime" type={"name"} ></InputComponent>
        </div>
      </FormContainer>
      <InputComponent value={movieObject.tagline} widthPercent={97} placeholder="" title="Description" type={"textarea"} ></InputComponent>
      <div className="add-edit-button-panel">
        <ResetButton>Reset</ResetButton>
        <ConfirmationButton type="submit">Submit</ConfirmationButton>
      </div>
    </>
  );
}
export default AddDialogComponent;

AddDialogComponent.propTypes = {
  movie: PropTypes.object
}
AddDialogComponent.defaultProps = {
  movie: new Movie()
}
