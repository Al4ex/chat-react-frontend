import React from "react";
import { newDate } from "../../helpers/date";
import avatarDefault from "../../img/user.png";

const IncomingMessage = ({ msg }) => {
  return (
    <>
      <div className={` flex`}>
        <div className={`mr-4 self-end `}>
          <div className="relative w-12 h-12 ">
            <img
              src={avatarDefault}
              className="object-cover object-center h-full w-full rounded-full border border-slate-400"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`w-fit bg-white rounded-bl-none break-all h-auto whitespace-pre-wrap max-w-sm text-xl px-4 py-2 rounded-xl  shadow-lg`}
          >
            <small>{msg.msg}</small>
          </div>
          <small className={` text-gray-500`}>{newDate(msg.createAt)}</small>
        </div>
      </div>
    </>
  );
};

export default IncomingMessage;
