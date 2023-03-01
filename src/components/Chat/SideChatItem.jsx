import React, { Fragment, useCallback, useContext, useEffect } from "react";

import avatarDefault from "../../img/user.png";
import useChat from "../../hooks/useChat";
import { types } from "../../types/types";
import { fetchConToken } from "../../helpers/fetch";
import { scrollWithOut } from "../../helpers/scroll";
import useUi from "../../hooks/useUi";
import useAuth from "../../hooks/useAuth";
import { SocketContext } from "../../context/SockectContext";
import useWindowFocus from "use-window-focus";
import { newDate } from "../../helpers/date";

const SideChatItem = ({ user }) => {
  console.log(user);
  // const windowFocused = useWindowFocus();
  const { socket } = useContext(SocketContext);
  const { auth } = useAuth();
  const { setGlobalChat } = useUi();
  const { chatState, dispatch } = useChat();
  const { chatActive } = chatState;
  const hadleClick = async () => {
    setGlobalChat(true);
    dispatch({
      type: types.activeChat,
      payload: user,
    });
    const resp = await fetchConToken(`message/${user._id}`);

    console.log(resp, 'load');
    dispatch({
      type: types.loadMessages,
      payload: resp.messages,
    });
    // const update = await fetchConToken(
    //   `message/read`,
    //   {
    //     from: user._id,
    //     to: auth.uid,
    //   },
    //   "PUT"
    // );
    socket?.emit("read-messages", {
      from: user._id,
      to: auth.uid,
    });

    // mover scroll|
  };
  // useEffect(() => {
  //   if (chatActive == user._id && windowFocused) {
  //     socket?.emit("read-messages", {
  //       from: user._id,
  //       to: auth.uid,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    scrollWithOut("bottom");
  }, [hadleClick]);
  // console.log(user.message.filter((filter) => auth.uid === filter.to).length);
  return (
    <div
      onClick={hadleClick}
      className={` flex rounded p-4 py-7 mb-4 relative box-border cursor-pointer ${
        user._id === chatActive ? "bg-gray-200" : "bg-white "
      } `}
    >
      <div className="">
        <div className="relative w-12 h-12 mr-4 ">
          <img
            src={user.imagen ? user.imagen : avatarDefault}
            className="object-cover object-center h-full w-full rounded-full border-black"
            alt=""
          />
          {user.state ? (
            <div className="absolute rounded-full right-0 bottom-0 bg-green-300 p-1 border-gray-800  border-2"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <img src={img} className="rounded-full w-12 mr-4 object-center" alt="" /> */}
      <div className="w-full overflow-hidden ">
        <div className="flex">
          <div className="flex-grow">
            <p className="overflow-ellipsis overflow-hidden whitespace-nowrap text-lg block">
              {user.username}
            </p>
          </div>
          <small className="font-light text-sm text-gray-700">{user.state ? 'En linea' : newDate(user.ultimaConexion)}</small>
        </div>
        <small className="overflow-ellipsis overflow-hidden text-base whitespace-nowrap block font-light text-gray-500">
          {/* {user.mensajes.msg((msglast) => ( */}
            <Fragment key={user.ultimoMensaje.msg}>{user.ultimoMensaje.msg}</Fragment>
          {/* ))} */}
        </small>
      </div>

      {/* {user.message.filter((filter) => auth.uid === filter.to).length > 0 ? (
        <div className="absolute h-7 text-sm text-center text-white font-semibold w-7 rounded-full right-0 top-0 bg-blue-500 p-1 border-gray-100  border">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {user.message.filter((filter) => auth.uid === filter.to).length}
          </span>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default SideChatItem;
