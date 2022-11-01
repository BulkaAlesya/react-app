import React from 'react';
import HeaderComponent from './components/header/Header.component';
import './App.css';
import MenuComponent from './components/menu/Menu.component';
import BodyContainerComponent from './components/body/BodyContainer.component';
import ErrorBoundary from './components/common/ErrorHandler/ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <HeaderComponent />
        <MenuComponent></MenuComponent>
      </ErrorBoundary>
      <ErrorBoundary>
      <BodyContainerComponent></BodyContainerComponent>
      </ErrorBoundary>
    </div>
  );
}
export default App;
