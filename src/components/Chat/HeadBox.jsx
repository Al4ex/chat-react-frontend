import React, { useEffect } from "react";
import { fetchConToken } from "../../helpers/fetch";
import useChat from "../../hooks/useChat";
import useUi from "../../hooks/useUi";
import avatarDefault from "../../img/user.png";

const HeadBox = () => {
  const { chatState } = useChat();
  const { userSelect } = chatState;
  const { globalChat, setGlobalChat } = useUi();
  const handleClick = () => {
    setGlobalChat(false);
  };

  return (
    <div className="px-4 md:px-12 py-3 md:py-5 w-full h-auto border-b-gray-300 border-b-4">
      <div className="flex items-center">
        <div
          onClick={handleClick}
          className="flex flex-grow text-gray-400 hover:text-gray-500 md:hidden"
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex flex-grow">
          <div className="relative md:w-12 md:h-12 w-10 h-10 mr-4 ">
            <img
              src={userSelect.imagen ? userSelect.imagen : avatarDefault}
              className="object-cover object-center h-full w-full rounded-full border-black"
              alt=""
            />
          </div>
          <div className="">
            <p className="font-medium ">{userSelect.username}</p>
            <small className="font-light ">
              {userSelect.state && <>En linea</>}
            </small>
          </div>
        </div>
        <div className="flex text-gray-400 hover:text-gray-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeadBox;
