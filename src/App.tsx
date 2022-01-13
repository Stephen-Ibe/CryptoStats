import React from "react";
import Login from "./pages/auth/Login";
import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./routes/routes";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
