import { Outlet,} from "react-router";
import navigator from "../components/navigator";  

export default function MainLayout () {


    return (
        <div>
            <Outlet/>
            <navigator/>
        </div>
    )
}