import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/SockectContext";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { auth } = useAuth();
  const { chatState } = useChat();
  const [msg, setMsg] = useState("");
  console.log(chatState);
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    let trimmedMsg = msg.trim(); // Eliminar espacios en blanco al inicio y al final
    let msgToSend = trimmedMsg.replace(/\n+$/, ""); // Eliminar saltos de línea al final

    if (msgToSend.length === 0) {
      return;
    }

    // Emitir evento para enviar el mensaje
    socket.emit("message-personal", {
      to: chatState.chatActive,
      from: auth.uid,
      msg: msgToSend,
    });

    socket?.emit("read-messages", {
      from: chatState.chatActive,
      to: auth.uid,
    });

    setMsg("");
    msgToSend = ""
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "Enter") {
      setMsg((prevValue) => prevValue + "\n");
      return
    }
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
      setMsg("")
    }
  };
  useEffect(() => {
    // resetear el estado de "msg" cuando "chatState.chatActive" cambie
    setMsg("");
  }, [chatState.chatActive]);
  return (
    <div className="py-3 px-8 md:px-12 border-t-2 h-auto  w-full border-gray-300">
      <form className="flex" onSubmit={handleSubmit} id="formSend">
        <textarea
          type="text"
          name="msg"
          value={msg}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border mr-4 scrollbar-w-1 max-h-96 h-11 scrollbar-track-gray-400 scrollbar-thumb-black rounded-lg  py-2 px-4 w-full focus:outline-none resize-none"
          placeholder="Escribe tu mensaje..."
          autoComplete="off"
        />
        <div className=" self-end">
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 h-10 rounded-md outline-none text-white font-semibold shadow-md p-1 w-20"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
