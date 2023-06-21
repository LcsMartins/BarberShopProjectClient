import React from "react";

import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Reserve from "../pages/Reserve";
import Login from "../pages/Login"
import Register from "../pages/Register"
import RegisterPass from "../pages/RegisterPassword"
import Nav from "../components/Nav"
import Header from "../components/Header"


const PagesRoutes: React.FC = () => (
    <Routes>
        <Route path=""           element={ <> <Nav/> <Home/> </>} />
        <Route path="/home"      element={ <> <Nav/> <Home/> </>} />
        <Route path="/reserve"   element={ <> <Nav/> <Reserve/> </>} />
        <Route path="/account"   element={ <> <Nav/> <Account/> </>} />
        <Route path="/login"     element={ <> <Header/> <Login/> </>} />
        <Route path="/register"     element={ <> <Header/> <Register/> </>} />
        <Route path="/register/pass"     element={ <> <Header/> <RegisterPass/> </>} />
    </Routes>
);

export default PagesRoutes;