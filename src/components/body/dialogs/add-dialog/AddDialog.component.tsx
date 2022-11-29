import React, { useState } from 'react';
import styled from 'styled-components';
import MultiselectDropdownComponent from '../../../common/multiselect-dropdown/MultiselectDropdownInput.component';
import { GenreItem } from '../../../common/input/GenreItemList';
import InputComponent from '../../../common/input/Input.component';
import PropTypes from 'prop-types';
import { Movie} from '../../movie-list';
import { ConfirmationButton, ResetButton } from '../../../common/common.styled-components';
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
  const genreList = GenreItem.asList();
  const [movieObject, updateValue] = useState(movie);

  return (
    <>
      <FormContainer>
        <div> 
          <InputComponent widthPercent={90} title="Title" type={"name"} value={movieObject.name}></InputComponent>
          <InputComponent 
            value={movieObject.url}
            widthPercent={90} 
            placeholder="https://" 
            title="Movie url" 
            type={"name"} >
          </InputComponent>
          <MultiselectDropdownComponent 
            value={movieObject.genre}
            optionsList={genreList}
            placeholder="Select Genre"
            widthPercent={93}
            title="Genre" >
          </MultiselectDropdownComponent>
        </div> 
        <div> 
          <InputComponent value={movieObject.date.toString()} widthPercent={90} placeholder="Select Date" title="Year" type={"date"}></InputComponent>
          <InputComponent value={movieObject.rating} widthPercent={90} placeholder="7.8" title="Rating" type={"name"} ></InputComponent>
          <InputComponent value={movieObject.runtime} widthPercent={90} placeholder="minutes" title="Runtime" type={"name"} ></InputComponent>
        </div>
      </FormContainer>
      <InputComponent value={movieObject.description} widthPercent={97} placeholder="" title="Description" type={"textarea"} ></InputComponent>
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