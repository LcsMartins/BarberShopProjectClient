import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import GlobalStyle from "./assets/global";
import { UserProvider } from "./utils/useUser";
import { BrowserRouter } from "react-router-dom";
import PagesRoutes from "./routes/index";
import { Provider } from "react-redux";
import configureBarberShopStore from "./redux/store";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={configureBarberShopStore([])}>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <PagesRoutes />
              <GlobalStyle />
            </UserProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
