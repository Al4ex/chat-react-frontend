import React from "react";
import useWindowFocus from "use-window-focus";

const ChatSelect = () => {
  const windowFocused = useWindowFocus();
  return (
    <div className="w-full flex flex-row justify-center self-center py-4 h-screen ">
      <div className="justify-center items-center flex-col flex">
        <h1 className="text-xl font-semibold">Selecciona un chat</h1>
        <span className="text-lg">Para empezar a conversar</span>
        <span>{windowFocused ? "Focused" : "Not focused"}</span>
      </div>
    </div>
  );
};

export default ChatSelect;
