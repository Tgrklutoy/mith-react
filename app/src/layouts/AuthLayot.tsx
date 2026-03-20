import { Outlet } from "react-router";
import Navbar from "../components/Navigator";

export default function AuthLayout () {
    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    )
}