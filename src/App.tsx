import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import GlobalStyle from './assets/global';
import { UserProvider } from './utils/useUser';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Nav/>
          <Home/>
        <GlobalStyle/>  
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

