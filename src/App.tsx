// App.tsx
import React from "react";
import "./App.css";
import RoutesApp from "./routes/index";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App: React.FC = () => (
  <>
    {/* 
    <CssBaseline /> */}
    <RoutesApp />
  </>
);

export default App;
/* 
CRIAR AS ROTAS DO PROJETO */
