import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";

export default function RequireAuth ({ element }){
    let {user} = useAuth();
    let location = useLocation();

    if(!user.id){
        return <Navigate to='/signin' state = {{ from: location }} replace /> ;
    }

    return element;
}