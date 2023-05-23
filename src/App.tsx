import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import GlobalStyle from './assets/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Nav/>
          <Home/>
        <GlobalStyle/>  
      </ThemeProvider>
      
    </div>
  );
}

export default App;
