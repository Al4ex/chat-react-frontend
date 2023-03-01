import React, { memo, useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { Toaster } from "react-hot-toast";
import ChatSelect from "../components/Chat/ChatSelect";

import Messages from "../components/Chat/Messages";
import useChat from "../hooks/useChat";
import useUi from "../hooks/useUi";
import { RiSettings3Line, RiChat1Line, RiMessage2Line } from "react-icons/ri";
import SectionInbox from "../components/Chat/sections/SectionInbox";
import SectionMenu from "../components/Chat/sections/SectionMenu";

const ChatPages = () => {

  const { globalChat } = useUi();
  const { chatState } = useChat();
  const { chatActive } = chatState;

  // const [change, setChange] = useState({ option: "", hidden: "" });

  
  // useEffect(() => {}, [change]);


  
  return (
    // <section className="h-screen flex overflow-hidden">
    <section className="h-screen flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      <Toaster/>
      <SectionMenu />
      {/* <div className="bg-white w-full flex-grow p-6"> */}
      <SectionInbox/>
      <div
        className={`${
          globalChat ? "" : "translate-x-full"
        }  md:w-9/12 md:flex md:translate-x-0 md:min-w-min bg-gray-200 transition-all flex-col flex-1  flex md:order-3 h-screen fixed md:relative w-full`}
      >
        {chatActive ? <Messages /> : <ChatSelect />}
      </div>
    </section>
  );
};

export default ChatPages;
