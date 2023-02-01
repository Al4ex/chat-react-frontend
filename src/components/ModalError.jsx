import React from "react";
import useAuth from "../hooks/useAuth";

const ModalError = () => {
  const { setError, message, setMessage } = useAuth();
  const modalData = (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);
  };
  return (
    <div
      onClick={modalData}
      className="fixed inset-0 bg-gray-500 w-full left-0 h-screen bg-opacity-75 z-20 justify-between items-start"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:items-center sm:p-0">
        <form
          onSubmit={modalData}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="sm:items-start">
              <div className="icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center mt-3 ">
                <h3 className="text-lg font-medium">Error</h3>
                <div className=" mt-2">
                  <p className="text-gray-600 text-sm">
                    {message.length == 0
                      ? "Verifique su correo y contraseña"
                      : message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="actions bg-gray-50 px-4 py-3 ">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-400 font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 "
            >
              Ok
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

export default ModalError;
