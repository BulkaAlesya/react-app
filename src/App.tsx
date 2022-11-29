import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './components/api/configureStore';
import BodyContainerComponent from './components/body/BodyContainer.component';
import ErrorBoundary from './components/common/ErrorHandler/ErrorBoundary';
import HeaderComponent from './components/header/Header.component';
import MenuComponent from './components/menu/Menu.component';
export const HeaderContext = React.createContext(null);

function App() {
  const [selected, updateSelected] = useState(null);

  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <HeaderContext.Provider value={{ selected, updateSelected }}>
            <HeaderComponent />
          </HeaderContext.Provider>
          <MenuComponent></MenuComponent>
        </ErrorBoundary>
        <ErrorBoundary>
        <BodyContainerComponent onSelectedUpdate={updateSelected}></BodyContainerComponent>
        </ErrorBoundary>
      </Provider>
    </>
  );
}
export default App;
