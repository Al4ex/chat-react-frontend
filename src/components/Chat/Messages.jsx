import React, { useEffect, useRef, useState } from "react";
import { animateScrollToBottom, scrollWithOut } from "../../helpers/scroll";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import HeadBox from "./HeadBox";
import IncomingMessage from "./IncomingMessage";
import OutMessages from "./OutMessages";
import SendMessage from "./SendMessage";
import moment from "moment";

// const Messages = () => {
//   const { chatState } = useChat();
//   const { auth } = useAuth();
//   const [currentDateGroup, setCurrentDateGroup] = useState(null);
// const [showDate, setShowDate] = useState(true);
//   const container = useRef(null)

//   const messageGroups = {};
//   chatState.messages.forEach((message) => {
//     const date = moment(message.createAt).format("DD/MM/YYYY");
//     if (!messageGroups[date]) {
//       messageGroups[date] = [];
//     }
//     messageGroups[date].push(message);
//   });

//   const dates = Object.keys(messageGroups).sort(
//     (a, b) => moment(a, "DD/MM/YYYY") - moment(b, "DD/MM/YYYY")
//   );
//   const dateNow = moment().format("DD/MM/YYYY");
//   console.log(dates[1]);
//   const handleScroll = () => {
//     console.log("scroll");
//     const bottom = document.getElementById("bottom");
//     const bottomPosition = bottom.getBoundingClientRect().bottom;
//     const groups = document.getElementsByClassName("date-group");
//     let currentGroup = null;
  
//     for (let i = groups.length - 1; i >= 0; i--) {
//       const groupPosition = groups[i].getBoundingClientRect().top;
//       if (groupPosition <= bottomPosition) {
//         currentGroup = groups[i].getAttribute("data-date");
//         break;
//       }
//     }
  
//     if (currentGroup !== currentDateGroup) {
//       setCurrentDateGroup(currentGroup);
//       setShowDate(true);
//       setTimeout(() => setShowDate(false), 3000);
//     }
//   };
//   useEffect(() => {

//     container.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, [chatState]);
  

//   useEffect(() => {
//     animateScrollToBottom("bottom");
//   }, [chatState.msgSend]);

//   return (
//     <>
//       <HeadBox />
//       <div
//         id="bottom"
//         className="px-8 md:px-12 w-full flex-grow overflow-auto "
//       >
//         {dates.map((date) => (
//   <div key={date} className="date-group" data-date={date}>
//     {showDate && (
//       <div className={`flex justify-center mb-4 sticky top-0 font-semibold text-gray-700 py-2 px-3 z-10`}>
//         <div className="bg-gray-100 px-2 mx-2 rounded text-sm text-gray-500">
//           {date}
//         </div>
//       </div>
//     )}
//     {messageGroups[date].map((msg) =>
//       msg.to == auth.uid ? (
//         <IncomingMessage key={msg._id} msg={msg} />
//       ) : (
//         <OutMessages key={msg._id} msg={msg} />
//       )
//     )}
//   </div>
// ))}


//       </div>
//       <SendMessage />
//     </>
//   );
// };
const Messages = () => {
  const { chatState } = useChat();
  const { auth } = useAuth();
  const messageGroups = {};
  chatState.messages.forEach((message) => {
    const date = moment(message.createAt).format("DD/MM/YYYY");
    if (!messageGroups[date]) {
      messageGroups[date] = [];
    }
    messageGroups[date].push(message);
  });

  const dates = Object.keys(messageGroups).sort(
    (a, b) => moment(a, "DD/MM/YYYY") - moment(b, "DD/MM/YYYY")
  );
  const dateNow = moment().format("DD/MM/YYYY");
  console.log(dates[1]);

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
                <div className="bg-gray-100 px-2 mx-2 rounded text-sm text-gray-500">
                  {dateNow != date ? date : 'Hoy'}
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
