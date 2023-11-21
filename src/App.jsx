import { useState } from "react";
import AppRouter from "./AppRouter";
import Store from "./Store";
import MainThemeProvider from "./MainTheme";

function App() {
  return (
    <>
      <Store>
        <MainThemeProvider>
          <AppRouter />
        </MainThemeProvider>
      </Store>
    </>
  );
}

export default App;
