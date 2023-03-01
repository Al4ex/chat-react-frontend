import React, { useEffect, createContext, useState } from "react";
import Push from "push.js";

import { fetchConToken } from "../helpers/fetch";
import { animateScrollToBottom } from "../helpers/scroll";

import useAuth from "../hooks/useAuth";
import useChat from "../hooks/useChat";
import { useSocket } from "../hooks/useSockect";
import { types } from "../types/types";
import { Socket } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [focus, setFocus] = useState(true)
  const { dispatch,chatState } = useChat();
  // importar metodos de useSocket
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    import.meta.env.VITE_SOCKETURL
  );
  // obtener el estado de autentificacion
  const { auth } = useAuth();

  // iniciar el socket si esta loggeado
  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  // Escuchar usuarios conectados
  useEffect(() => {
    socket?.on("list-users", (users) => {
      dispatch({ type: types.usersLoads, payload: users });
    });
  }, [socket, dispatch]);
  let uno = 1;
  useEffect(() => {
    socket?.on("message-personal", async (message) => {
      const { user } = await fetchConToken(`/user/${message.from}`);
      if (message.to == auth.uid) {
        if (focus) {
          Push.create(user.username, {
          body: message.msg,
          icon:
            user.imagen == null
              ? "/src/img/user.png"
              : import.meta.env.VITE_SOCKETURL + "/" + user.imagen,
          timeout: 4000,
          onClick: function () {
            window.focus();
            this.close();
          },
        });
        }
        
      }
      dispatch({
        type: types.newMessage,
        payload: message,
      });
      // mover el scroll
      animateScrollToBottom("bottom");
    });
  }, [socket, dispatch]);

  
  
  
  return (
    <SocketContext.Provider value={{ socket, online, setFocus }}>
      {children}
    </SocketContext.Provider>
  );
};
