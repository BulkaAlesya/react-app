import React from 'react';
import { LogoTitle } from '../../header/logo-component/NetflixLogo.component';
import { ButtonBlock, NotFoundContainer, NotFoundTextBox, GoBackButton, GoBackTitle } from './ErrorPage.styled-components';

const ErrorPage = React.Catch(function MyErrorBoundary(props, error) {
  return (
    error ? (<NotFoundContainer>
      <LogoTitle></LogoTitle>
      <NotFoundTextBox>404</NotFoundTextBox>
      <ButtonBlock>
        <GoBackButton> <GoBackTitle >Go Back To Home </GoBackTitle></GoBackButton>
      </ButtonBlock>
    </NotFoundContainer>)
      : props.children
  );
});

export default ErrorPage;