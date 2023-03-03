import React, { useEffect, useRef, useState } from "react";
import { animateScrollToBottom, scrollWithOut } from "../../helpers/scroll";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import HeadBox from "./HeadBox";
import IncomingMessage from "./IncomingMessage";
import OutMessages from "./OutMessages";
import SendMessage from "./SendMessage";
import moment from "moment/moment";
import 'moment/locale/es';

const Messages = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();
  const messageGroups = {};
  chatState.messages.forEach((message) => {
    const date = moment(message.createAt).format("YYYY-MM-DD");
    if (!messageGroups[date]) {
      messageGroups[date] = [];
    }
    messageGroups[date].push(message);
  });

  const dates = Object.keys(messageGroups).sort(
    (a, b) => moment(a, "YYYY-MM-DD") - moment(b, "YYYY-MM-DD")
  );
  const dateNow = moment().format("DD/MM/YYYY");
  const getDateFormat = (dateChat) => {
    
    const lastConnect = moment(dateChat);
    const now = moment();
    const yesterday = moment().subtract(1, 'days');
    const diffDays = lastConnect.diff(now, 'days');

    if (lastConnect.isSame(now, 'day')) {
      return `Hoy`;
    } else if (lastConnect.isSame(yesterday, 'day')) {
      return `Ayer`;
    } else if (diffDays > -3) {
      return lastConnect.format('dddd');
    } else {
      return lastConnect.format('DD/MM/YYYY');
    }
  };

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
        {dates.map((date) => (
          <div key={date}>
            {date && (
              <div className={`flex justify-center mb-4 ${dateNow != date ? 'sticky' : ''} top-0 font-semibold text-gray-700 py-2 px-3 z-10`}>
                {/* <div className="border-t border-gray-300 w-full my-auto"></div> */}
                <div className="bg-gray-100 px-2 mx-2 capitalize rounded text-sm text-gray-500">
                {getDateFormat(date)}
                </div>
                {/* <div className="border-t border-gray-300 w-full my-auto"></div> */}
              </div>
            )}
            {messageGroups[date].map((msg) =>
              msg.to == auth.uid ? (
                <IncomingMessage key={msg._id} msg={msg} />
              ) : (
                <OutMessages key={msg._id} msg={msg} />
              )
            )}
          </div>
        ))}

        <div />
      </div>
      <SendMessage />
    </>
  );
};

export default Messages;

/* {lastDate !== date && (
              <div className="flex justify-center mb-4">
                <div className="border-t border-gray-300 w-full my-auto"></div>
                <div className="bg-gray-100 px-2 mx-2 rounded text-sm text-gray-500">
                  {date}
                </div>
                <div className="border-t border-gray-300 w-full my-auto"></div>
              </div>
            )} */
