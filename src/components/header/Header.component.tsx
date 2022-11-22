import React, { useContext, useState } from 'react';
import { HeaderContext } from '../../App';
import AddDialogComponent from '../body/dialogs/add-dialog/AddDialog.component';
import ModalWindow from '../common/modal-window/Modal.component';
import DetailsPanel from './details-panel/DetailsPanel.component';
import { AddButton, Background, HeaderLabel, SearchButton, SearchFormContainer, SearchInput } from './header.styled-components';
import { LogoTitle } from './logo/NetflixLogo.component';

const HeaderComponent = () => {

  const [addDialogOpened, openDialog] = useState(false);
  const selectedContext = useContext(HeaderContext);

  return ( selectedContext 
    ? <DetailsPanel selected= {selectedContext}></DetailsPanel>
    : <Background>
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
