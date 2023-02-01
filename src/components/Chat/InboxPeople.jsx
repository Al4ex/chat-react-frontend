import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ModalAdd from "./ModalAdd";
import SidebarInbox from "./SidebarInbox";
import useWindowFocus from "use-window-focus";
import { SocketContext } from "../../context/SockectContext";

const InboxPeople = () => {
  const { auth, logOut } = useAuth();
  const windowFocused = useWindowFocus();
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    socket?.emit('focus', windowFocused)
  }, [windowFocused])
  

  return (
    <>
      <div className="flex py-5 pt-2 px-2 rounded-md  h-auto w-full mb-3  ">
        <div className="flex items-center align-middle flex-grow">
          <h3 className="text-xl ">
            <span className="font-semibold capitalize"> {auth.name}</span> en
            linea
          </h3>
          <div className="ml-1 cursor-pointer hover:text-sky-500 text-blue-800">
            {" "}
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
        </div>

        <button onClick={logOut} className="text-red-500 hover:text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      {/* <div className="flex overflow-auto w-full mb-8 scrollbar scrollbar-hidden hover:scrollbar-auto scrollbar-track-radius-md scrollbar-width-2 ">
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className=" absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
        <div className="self-center text-center mr-4">
          <div className=" relative w-12 h-12 bg-red ">
            <img
              src=""
              className="object-cover object-center h-full w-full rounded-full border-2 border-black"
              alt=""
            />
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          </div>
          <small>Diega</small>
        </div>
      </div> */}
      <SidebarInbox />
    </>
  );
};

export default InboxPeople;
