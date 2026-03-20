import { Outlet,} from "react-router";
import Navbar from "../components/Navigator";

export default function MainLayout () {


    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    )
}