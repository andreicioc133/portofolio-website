import { useState, useContext, createContext } from "react";

export const AppContext = createContext({});

function Store(props) {
  const [lightTheme, setLightTheme] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppContext.Provider
      value={{
        lightTheme,
        setLightTheme,
        openDrawer,
        setOpenDrawer,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
