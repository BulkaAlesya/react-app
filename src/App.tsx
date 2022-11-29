import React, { useState } from 'react';
import HeaderComponent from './components/header/Header.component';
import './App.css';
import MenuComponent from './components/menu/Menu.component';
import BodyContainerComponent from './components/body/BodyContainer.component';
import ErrorBoundary from './components/common/ErrorHandler/ErrorBoundary';

export const HeaderContext = React.createContext(null);

function App() {
  const [selected, updateSelected] = useState(null);

  return (
    <>
      <ErrorBoundary>
        <HeaderContext.Provider value={{ selected, updateSelected }}>
          <HeaderComponent />
        </HeaderContext.Provider>
        <MenuComponent></MenuComponent>
      </ErrorBoundary>
      <ErrorBoundary>
      <BodyContainerComponent onSelectedUpdate={updateSelected}></BodyContainerComponent>
      </ErrorBoundary>
    </>
  );
}
export default App;
