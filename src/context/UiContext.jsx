import React, { createContext, useState } from "react";
export const UiContext = createContext();

const initialState = {
  selectChat: false,
};

const UiProvider = ({ children }) => {
  const [globalChat, setGlobalChat] = useState(false);
  return (
    <UiContext.Provider value={{ globalChat, setGlobalChat }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
