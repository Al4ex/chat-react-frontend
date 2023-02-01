import React from "react";
import { newDate } from "../../helpers/date";
import avatarDefault from "../../img/user.png";

const OutMessages = ({ msg }) => {
  return (
    <>
      <div className={`flex-row-reverse flex `}>
        {/*  <div className={`flex w-96  `}> */}
        <div className={`ml-4 self-end `}>
          <div className="relative w-12 h-12 ">
            <img
              src={avatarDefault}
              className="object-cover object-center h-full w-full rounded-full border border-black"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div
            className={`w-fit self-end md:self-auto bg-blue-400 flex rounded-br-none break-all h-auto whitespace-pre-wrap max-w-sm text-xl px-4 py-2 sm:w-auto rounded-3xl shadow-lg`}
          >
            {/* <p className="self-end ">Dan</p> */}
            <small className="flex-grow">{msg.msg}</small>
          </div>
          <small className={`pl-3 self-end text-gray-600 sm:text-sm text-xs`}>
            {newDate(msg.createAt)}
          </small>
        </div>
      </div>
    </>
  );
};

export default OutMessages;
