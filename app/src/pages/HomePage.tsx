import { useNavigate } from "react-router"


export default function HomePage(){

     let navigate = useNavigate()
    function login (){
 localStorage.removeItem("UserId")
 navigate("/auth/login")
};


    return (
        <div>
            <h1 >Home Page</h1>
            <button onClick={login}></button>z

        </div>
    )
}