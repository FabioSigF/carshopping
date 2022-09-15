import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        openMobileMenu,
        setOpenMobileMenu,
      }}>
      {children}
    </StateContext.Provider>

  )
}

export const useStateContext = () => useContext(StateContext);