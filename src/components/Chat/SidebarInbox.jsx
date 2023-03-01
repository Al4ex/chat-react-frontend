import React from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import SideChatItem from "./SideChatItem";

const SidebarInbox = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();
  let { users } = chatState;
  let newUsersList = Array.from(users);
  console.log(newUsersList);
  if (users === null) {
    users = [];
  }

  
  return (
    <>
      {users.filter((filter) => auth.uid != filter._id).map((el) => (
        <SideChatItem key={el["_id"]} user={el["contacto"]} />
      ))}
    </>
  );
};

export default SidebarInbox;
