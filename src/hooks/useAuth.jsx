import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";


//  const first = useContext(CotizadorContext)

const useAuth = () =>{

    return useContext(AuthContext)
}

export default useAuth;