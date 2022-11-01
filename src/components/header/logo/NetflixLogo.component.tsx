import React from 'react';
import { NetflixLogoTitle, RouletteLogoTitle, TitleContainer } from './NetflixLogo.styled-components';

export const LogoTitle = () =>
  (<TitleContainer>
    <NetflixLogoTitle>netflix</NetflixLogoTitle>
    <RouletteLogoTitle>roulette</RouletteLogoTitle>
  </TitleContainer>
);