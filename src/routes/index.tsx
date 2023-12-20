import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Account from "../pages/account/index";
import Wikipedia from "../pages/wikipedia";
import Favorite from "../pages/favorite";
import Gaming from "../pages/gaming"

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wikipedia" element={<Wikipedia />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/gaming/home" element={<Gaming />} />
    </Routes>
  );
};

export default RoutesApp;
