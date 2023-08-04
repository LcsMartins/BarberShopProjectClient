import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Reserve from "../pages/Reserve";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterPassword from "../pages/RegisterPassword";
import Nav from "../components/Nav";
import Header from "../components/Header";
import PrivateRoute from "./PrivateRoutes";
import PrivateRouteRegister from "./PrivateRouteRegister copy";

const PagesRoutes: React.FC = () => (
  <Routes>
    <Route
      element={
        <>
          <Header />
          <Login />
        </>
      }
      path="/login"
    />

    <Route
      element={
        <>
          <Header />
          <Register />
        </>
      }
      path="/register"
    />

    <Route
      element={
        <PrivateRouteRegister>
          <Header />
          <RegisterPassword />
        </PrivateRouteRegister>
      }
      path="/register-password"
    />

    <Route
      element={
        <PrivateRoute>
          <Nav />
          <Home />
        </PrivateRoute>
      }
      path="/home"
    />

    <Route
      element={
        <PrivateRoute>
          <Nav />
          <Home />
        </PrivateRoute>
      }
      path="/"
    />

    <Route
      element={
        <PrivateRoute>
          <Nav />
          <Account />
        </PrivateRoute>
      }
      path="/account"
    />

    <Route
      element={
        <PrivateRoute>
          <Nav />
          <Reserve />
        </PrivateRoute>
      }
      path="/reserve"
    />
  </Routes>
);

export default PagesRoutes;
