import { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  chatActive: null, //uid del usuario a enviar mensajes
  users: [], //todos los usuarios de la bd
  messages: [], //mensajes del usuarios
  msgSend: true,
  userSelect: {},
};

const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
