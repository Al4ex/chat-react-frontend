import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Outlet />
        </div>
        <div className="hidden relative lg:flex w-1/2 bg-gray-200 h-full justify-center items-center">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
          <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0 "></div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
