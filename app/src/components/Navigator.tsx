import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./navigator.css";

export default function Navbar () {
    const location = useLocation();
    const [layout, setLayout] = useState("main");
    
    useEffect(() => {
        if (location.pathname.includes("chats")) {
            console.log(location);
            setLayout("chats");
        } else if (location.pathname === "/") {
            console.log(location);
            setLayout("main");
        } else if (location.pathname === "/profile") {
            console.log(location);
            setLayout("profile");
        } else if (location.pathname.includes("user")) {
            console.log(location);
            setLayout("user");
        }
    }, [location]);

    let navigate = useNavigate();

    function navigation(path) {
        navigate(path);
    };

    return (
        <div>
            <div className="navigator">
                <button  style={{backgroundColor: layout === 'main' ? '#ff0051bd' : '#f0f0f0',}} onClick={() => navigation("/")}>Лента</button>
                <button  style={{backgroundColor: layout === 'chats' ? '#ff0051bd' : '#f0f0f0',}} onClick={() => navigation("/chats")}> Чаты</button>
                <button  style={{backgroundColor: layout === 'profile' ? '#ff0051bd' : '#f0f0f0',}}  onClick={() => navigation("/profile")}>Профиль</button>
            </div>
        </div>
    )
}

