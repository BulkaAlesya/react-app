import React from 'react';
import { AddButton, Background, HeaderLabel, SearchButton, SearchFormContainer, SearchInput } from './header.styled-components';
import { LogoTitle } from './logo/NetflixLogo.component';

const HeaderComponent = () => {
  return (
  <Background>
    <LogoTitle></LogoTitle>
    <AddButton> + add movie </AddButton>
    <HeaderLabel> find your movie </HeaderLabel>
    <SearchFormContainer>
      <SearchInput placeholder="What do you want to watch?"></SearchInput>
      <SearchButton> search </SearchButton>
    </SearchFormContainer>
  </Background>
  );
}
export default HeaderComponent;
