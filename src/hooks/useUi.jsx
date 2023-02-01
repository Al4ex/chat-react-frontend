import React, { useContext } from "react";
import { UiContext } from "../context/UiContext";

const useUi = () => {
  return useContext(UiContext);
};

export default useUi;
