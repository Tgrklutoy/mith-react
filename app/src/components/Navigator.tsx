import { useNavigate } from "react-router";

export default function navigator () {

    let navigate = useNavigate();

    function navigation (path) {
        navigate(path)
    };

    return (
        <div>
            <div className="navigator">

                <button onClick={() => navigation("")}>Лента</button>
                <button onClick={() => navigation("/chats")}>Чаты</button>
                <button onClick={() => navigation("/profile")}>Профиль</button>
            </div>
        </div>
    )
}