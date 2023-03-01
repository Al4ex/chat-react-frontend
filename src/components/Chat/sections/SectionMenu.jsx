import React, { memo, useCallback, useMemo, useState } from 'react'
import { RiMessage2Line, RiSettings3Line } from 'react-icons/ri'

const SectionMenu = () => {
    const handleOnClick = (option) => {

      };
      const [hover, setHover] = useState(false);
      const handleOver = () => {
        setHover(true);
      };
    
    const handleLeave = () => {
        setHover(false);
      };
    
      
      
  return (
    <div className=" order-2 items-center w-full h-auto bg-white border-t border-gray-300 p-6 justify-around flex md:flex-col md:w-24 md:justify-center">
        <div className="md:flex-grow hidden md:block"></div>

        {/* <div className="text-gray-400 md:py-5 hover:text-blue-600">
        </div> */}
        <div
          onClick={() => handleOnClick("messages")}
          className="text-gray-400 md:py-5 hover:text-blue-600 md:flex-grow"
        >
        <RiMessage2Line className="w-6 h-6" />
        </div>
        {/* <div className="text-gray-400 md:py-5 hover:text-blue-600 md:flex-grow">

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
          <RiSettings3Line className="w-6 h-6" />

        </div>
      </div>
  )
}

export default SectionMenu