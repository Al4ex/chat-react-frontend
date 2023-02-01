import React from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import SideChatItem from "./SideChatItem";

const SidebarInbox = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();
  let { users } = chatState;
  console.log(users)
  users.forEach(element => {
    console.log(auth.uid  == element._id);
  });
  if (users === null) {
    users = [];
  }
  return (
    <div className="overflow-auto ">
      {users
        .filter((filter) => auth.uid != filter._id)
        .map((user) => (
          <SideChatItem key={user._id} user={user} />
        ))}
    </div>
  );
};

export default SidebarInbox;
