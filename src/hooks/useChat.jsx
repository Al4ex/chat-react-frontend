import { useContext } from "react";
import { ChatContext } from "../context/Chat/ChatContext";

const useChat = () => {
  return useContext(ChatContext);
};

export default useChat;
