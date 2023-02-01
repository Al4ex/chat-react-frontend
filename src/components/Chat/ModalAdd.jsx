import React from "react";

const ModalAdd = ({ setModalAdd }) => {
  const modalData = (e) => {
    e.preventDefault();
    console.log("Modal abierto");
  };
  return (
    <div className="fixed transition-all inset-0 bg-gray-500 w-full left-0 h-screen bg-opacity-75 z-20 justify-between items-start">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:p-0">
        <form
          onSubmit={modalData}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="sm:items-start">
              <div className="flex justify-between">
                <div className="flex items-center ">
                  <div className="icon flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md mr-5 bg-blue-500 text-white">
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
                  </div>

                  <span className="flex self-center flex-1">Añadir amigos</span>
                </div>
                <div
                  onClick={() => setModalAdd(false)}
                  className="cursor-pointer text-gray-400 hover:text-gray-500"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3 ">
                <label htmlFor="email" className="w-full text-slate-500 ">
                  Correo
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full inline-flex justify-center rounded-md shadow-sm px-6 py-4 bg-gray-100 font-medium  focus:outline-none "
                />
              </div>
            </div>
          </div>
          <div className="actions bg-gray-50 px-4 py-3 ">
            <button
              type="submit"
              className="w-full inline-flex justify-between rounded-md border border-transparent shadow-md px-6 py-4 bg-blue-400 font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 "
            >
              Invitar
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
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </button>
            {/* <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              aceptar
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
