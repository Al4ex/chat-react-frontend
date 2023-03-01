import React, { useState } from 'react'
import InboxPeople from '../InboxPeople'
import ModalAdd from '../ModalAdd'

const SectionInbox = () => {
  const [modalAdd, setModalAdd] = useState(false);

  return (
    <div className="order-1 md:order-2 bg-slate-50 relative flex px-6 pt-6 pb-1 flex-grow flex-col md:flex-grow-0 h-5/6 md:h-full md:w-[420px] ">
        {/* <div
          className={`${
            change.option == "config"
              ? " opacity-0 invisible"
              : "opacity-100 visible"
          } ${
            change.hidden == "config" ? "hidden" : "block"
          } relative `}
        > */}
          <div
            className={` transition-all duration-300 ease-out h-full`}
          >
            <InboxPeople />
            {modalAdd && <ModalAdd setModalAdd={setModalAdd} />}
          </div>
          <button
            onClick={() => setModalAdd(true)}
            className="bg-blue-400 text-white hover:bg-blue-500 w-12 h-12 text-center justify-center align-middle rounded-full  absolute bottom-10 md:bottom-10 md:right-5 right-8"
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
          </button>
        {/* </div> */}
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
  )
}

export default SectionInbox