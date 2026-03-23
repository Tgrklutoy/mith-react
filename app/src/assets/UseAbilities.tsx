import { useLocation, useNavigate } from "react-router";

export default function CheckRound () {
    let isAuth = false
    const location = useLocation();
    let navigate = useNavigate();
    if ( localStorage.getItem("UserId") != null) {
        isAuth = true 
        

    };
    if (location.pathname.includes("/auth")) {
        if (isAuth){
            navigate("/")
        }
        else {
            navigate("/auth/register")
    }    
    }
}