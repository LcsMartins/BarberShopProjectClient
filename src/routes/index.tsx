import React from "react";

import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Reserve from "../pages/Reserve";

const PagesRoutes: React.FC = () => (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/reserve" element={<Reserve/>} />
        <Route path="/account" element={<Account/>} />
    </Routes>
);

export default PagesRoutes;