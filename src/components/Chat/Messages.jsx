import React, { useEffect, useRef } from "react";
import { animateScrollToBottom, scrollWithOut } from "../../helpers/scroll";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import HeadBox from "./HeadBox";
import IncomingMessage from "./IncomingMessage";
import OutMessages from "./OutMessages";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();

  // const listRef = useRef(null);
  // const scrollToBottom = () => {
  //   listRef?.current.scrollIntoView();
  // };
  // const animateScrollBottom = () => {
  //   listRef.current?.scrollIntoView(chatState.messages.length);
  // };
  // useEffect(() => {
  //   scrollWithOut("bottom");
  //   console.log(chatState);
  // }, [chatState.chatActive]);
  useEffect(() => {
    animateScrollToBottom("bottom");
  }, [chatState.msgSend]);

  return (
    <>
      <HeadBox />
      <div
        id="bottom"
        className="px-8 md:px-12 w-full flex-grow overflow-auto "
      >
        {/* <div id="messenger" className="w-full flex-grow flex-shrink basis-0 "> */}
        {chatState.messages.map((msg) =>
          msg.to == auth.uid ? (
            <IncomingMessage key={msg._id} msg={msg} />
          ) : (
            <OutMessages key={msg._id} msg={msg} />
          )
        )}
        <div />
      </div>
      <SendMessage />
    </>
  );
};

export default Messages;
