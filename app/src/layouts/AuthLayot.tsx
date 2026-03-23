import { Outlet } from "react-router";
import Navbar from "../components/Navigator";
import CheckRound from "../assets/UseAbilities";


export default function AuthLayout () {
    CheckRound ()
    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    )
}