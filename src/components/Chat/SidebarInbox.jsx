import React from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import SideChatItem from "./SideChatItem";

const SidebarInbox = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();
  let { users } = chatState;
  let newUsersList = Array.from(users);
  if (users === null) {
    users = [];
  }


  // Array.from().forEach(element => {
  //   console.log(element);
  // });
  // console.log(users[0].contactos);
  // users[0].contactos.forEach(element => {
    
  // });
  
  return (
    <>
      {users.filter((filter) => auth.uid == filter._id).map( e =>(
    e['contactos'].map(el =>(<SideChatItem key={el["_id"]} user={el} />)
    )
  ))}
    </>
  );
};

export default SidebarInbox;
