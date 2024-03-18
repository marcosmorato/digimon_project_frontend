import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/index";
import Account from "../pages/account/index";
import Wikipedia from "../pages/wikipedia";
import Favorite from "../pages/favorite";
import Gaming from "../pages/gaming"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RoutesApp: React.FC = () => {
  const { isLogged, loggedUser } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <Routes>
      <Route
        path="/home"
        element={isLogged && loggedUser.user.token ? <Home /> : <Navigate to="/account" />}
      />
      <Route
        path="/account"
        element={<Account />}
      />
      <Route
        path="/wikipedia"
        element={isLogged && loggedUser.user.token ? <Wikipedia /> : <Navigate to="/account" />}
      />
      <Route
        path="/favorite"
        element={isLogged && loggedUser.user.token ? <Favorite /> : <Navigate to="/account" />}
      />
      {/* <Route
        path="/gaming/home"
        element={<Gaming />}
      /> */}
    </Routes>
  );
};

export default RoutesApp;