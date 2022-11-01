import React from 'react';
import { LogoTitle } from '../header/logo/NetflixLogo.component';
import { Footer, FooterLogoTitle } from './Footer.styled-components';

const FooterComponent = () => {
  return (
  <Footer>
    <FooterLogoTitle>
      <LogoTitle></LogoTitle>
    </FooterLogoTitle>
  </Footer>
  );
}
export default FooterComponent;
