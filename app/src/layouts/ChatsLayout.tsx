import { Outlet } from "react-router";
import Navbar from "../components/Navigator";

export default function ChatsLayout () {
    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    )
}