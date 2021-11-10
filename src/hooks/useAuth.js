import { useContext } from "react";
import { AuthContxt } from "../context/AuthProvider";

const useAuth = () => {
    const Auth = useContext(AuthContxt)
    
    return Auth;
}
export default useAuth;