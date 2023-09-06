import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Register from "../pages/register/index";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default RoutesApp;
