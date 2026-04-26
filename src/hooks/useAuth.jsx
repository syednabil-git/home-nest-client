import { use } from "react";
import { AuthContext } from "../contexts/AuthContex"

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
}

export default useAuth;