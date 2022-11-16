import React, { useState } from 'react';
import AddDialogComponent from '../body/dialogs/add-dialog/AddDialog.component';
import { Movies } from '../body/movie-list';
import ModalWindow from '../common/modal-window/Modal.component';
import { AddButton, Background, HeaderLabel, SearchButton, SearchFormContainer, SearchInput } from './header.styled-components';
import { LogoTitle } from './logo/NetflixLogo.component';

const HeaderComponent = () => {

  const [addDialogOpened, openDialog] = useState(false);
  return (
  <Background>
    <LogoTitle></LogoTitle>
    <AddButton onClick={() => openDialog(true)}> + add movie </AddButton>
    <HeaderLabel> find your movie </HeaderLabel>
    <SearchFormContainer>
      <SearchInput widthPercent={60} placeholder="What do you want to watch?"></SearchInput>
      <SearchButton> search </SearchButton>
    </SearchFormContainer>

    <ModalWindow
      opened = {addDialogOpened}
      onClose = {() => openDialog(false)}
      width = {50}
      title="Add movie"
      child = {<AddDialogComponent />}
    >
    </ModalWindow>
  </Background>
  );
}
export default HeaderComponent;
