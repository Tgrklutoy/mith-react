import CheckRound from "../assets/UseAbilities";
import { Outlet } from "react-router";
import Navbar from "../components/Navigator";
import "./chats.css"
import { useEffect } from "react";
import { chats } from "../data/chats";
import type { Chat } from "../type/ChatType";
import ChatComponent from "../components/ChatComponent";



export default function ChatsLayout () {
    
    CheckRound();
    
    function renderChat(chat: Chat) {
    
        return (
            <ChatComponent chat={chat}/>
        );
    }
    
    useEffect(() => {
        console.log(chats.map(chat => chat.id));
    }, [])
    
    return  (
        <div>
            <Outlet/>
            <Navbar/>
            <div className="chats-look">
                {chats.map(renderChat)}
            </div>
        </div>
    );
}