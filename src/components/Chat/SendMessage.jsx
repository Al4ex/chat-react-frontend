import React, { useContext, useState } from "react";
import { SocketContext } from "../../context/SockectContext";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { auth } = useAuth();
  const { chatState } = useChat();
  const [msg, setMsg] = useState("hola");
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.length == 0) {
      return;
    }

    // emitir evento para enviar el mensaje
    // {
    // to: para quien
    // from: de quien
    // message
    // }
    socket.emit("message-personal", {
      to: chatState.chatActive,
      from: auth.uid,
      msg,
    });
    socket?.emit("read-messages", {
      from: chatState.chatActive,
      to: auth.uid,
    });

    setMsg("");
  };
  return (
    // <div className="py-6 px-20 border-t-2 h-10 border-gray-300">
    <div className="py-3 px-8 md:px-12 border-t-2 h-auto w-full border-gray-300">
      <form className="flex" onSubmit={handleSubmit}>
        <textarea value={msg}
          onChange={handleInputChange}
          type="text"
          name="msg"
          className="border rounded-lg py-2 px-4 w-full focus:outline-none resize-none"
          placeholder="Escribe tu mensaje..."
          autoComplete="off" id="" cols="0" rows="1"></textarea>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 mr-4 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 mr-4 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 rounded-md outline-none text-white font-semibold shadow-md p-1 w-20"
        >
          Enviar{" "}
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
