import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import GlobalStyle from './assets/global';
import { UserProvider } from './utils/useUser';
import { BrowserRouter } from "react-router-dom";
import PagesRoutes from './routes/index';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <PagesRoutes />
            <GlobalStyle/>  
            </UserProvider>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
