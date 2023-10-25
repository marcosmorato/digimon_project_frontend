import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Register from "../pages/register/index";
import Wikipedia from "../pages/wikipedia";
import Favorite from "../pages/favorite";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/wikipedia" element={<Wikipedia />}></Route>
      <Route path="/favorite" element={<Favorite />}></Route>
    </Routes>
  );
};

export default RoutesApp;
