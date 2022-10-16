import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [user, setUser] = useState(undefined)


  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        openMobileMenu,
        setOpenMobileMenu,
        user,
        setUser
      }}>
      {children}
    </StateContext.Provider>

  )
}

export const useStateContext = () => useContext(StateContext);