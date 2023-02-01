import React, { useEffect, useState } from "react";
import ChatSelect from "../components/Chat/ChatSelect";
import HeadBox from "../components/Chat/HeadBox";
import InboxPeople from "../components/Chat/InboxPeople";
import Messages from "../components/Chat/Messages";
import ModalAdd from "../components/Chat/ModalAdd";
import useChat from "../hooks/useChat";
import useUi from "../hooks/useUi";

const ChatPages = () => {
  const [hover, setHover] = useState(false);
  const handleOver = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };
  const { globalChat } = useUi();
  const [change, setChange] = useState({ option: "", hidden: "" });

  const handleOnClick = (option) => {
    // setChange({ ...change, option: option });
    console.log(change);
    // setTimeout(() => {
    //   setChange({ option: option, hidden: option });
    // }, 300);
  };
  useEffect(() => {}, [change]);

  const { chatState } = useChat();
  const { chatActive } = chatState;
  const [modalAdd, setModalAdd] = useState(false);

  return (
    // <section className="h-screen flex overflow-hidden">
    <section className="h-screen flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      <div className=" order-2 items-center w-full h-auto bg-white border-t border-gray-300 p-6 justify-around flex md:flex-col md:w-24 md:justify-center">
        <div className="md:flex-grow hidden md:block"></div>

        {/* <div className="text-gray-400 md:py-5 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div> */}
        <div
          onClick={() => handleOnClick("messages")}
          className="text-gray-400 md:py-5 hover:text-blue-600 md:flex-grow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </div>
        {/* <div className="text-gray-400 md:py-5 hover:text-blue-600 md:flex-grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div> */}
        <div
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onClick={() => handleOnClick("config")}
          className="text-gray-400 md:py-5 hover:text-blue-600 relative"
        >
          <span
            className={`${
              hover ? "visible z-50" : "invisible  "
            } bottom-10 w-52 -left-24 md:left-10 md:w-56 md:bottom-1/2  md:translate-y-1/2 absolute rounded shadow-lg md:p-1 bg-gray-100 text-red-500 -mt-8`}
          >
            Desabilitado por el momento
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      {/* <div className="bg-white w-full flex-grow p-6"> */}
      <div className="order-1 md:order-2 bg-slate-50 relative flex px-6 pt-6 pb-1 flex-grow overflow-auto flex-col md:flex-grow-0 md:w-[420px] ">
        <div
          className={`${
            change.option == "config"
              ? " opacity-0 invisible"
              : "opacity-100 visible"
          } ${
            change.hidden == "config" ? "hidden" : "block"
          } relative h-screen`}
        >
          <div
            className={` transition-all duration-300 ease-out scrollbar-hide`}
          >
            <InboxPeople />
            {modalAdd && <ModalAdd setModalAdd={setModalAdd} />}
          </div>
          {/* <button
            onClick={() => setModalAdd(true)}
            className="bg-blue-400 text-white hover:bg-blue-500 w-12 h-12 text-center justify-center align-middle rounded-full  absolute bottom-0 md:bottom-10 right-0"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button> */}
        </div>
        {/* <div
          className={`${
            change.option == "config"
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } ${
            change.hidden == "config" ? "block" : "hidden"
          } transition-all duration-300 ease-out md:order-2 px-6 pt-6 pb-1 flex-grow overflow-auto md:flex-grow-0 md:w-4/12 scrollbar-hide`}
        >
          <form action="">
            <input
              type="text"
              placeholder="ingrese su numero de telefono "
              className="bg-red-300 text-black placeholder:text-gray-700 p-6"
            />
            <input type="submit" value="agregar" />
          </form>
        </div> */}
      </div>

      <div
        className={`${
          globalChat ? "" : "translate-x-full"
        }  md:w-9/12 md:flex md:translate-x-0 md:min-w-min bg-gray-200 transition-all flex-col flex-1  flex md:order-3 h-screen fixed md:relative w-full`}
      >
        {chatState.chatActive ? <Messages /> : <ChatSelect />}
      </div>
    </section>
  );
};

export default ChatPages;
