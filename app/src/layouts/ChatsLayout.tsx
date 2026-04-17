import CheckRound from "../assets/UseAbilities";
import { Outlet } from "react-router";
import Navbar from "../components/Navigator";
import "./chats.css"
import { useEffect, useState } from "react";
import { chats } from "../data/chats";
import type { Chat } from "../type/ChatType";
import ChatComponent from "../components/ChatComponent";




export default function ChatsLayout () {
    const [selectedChat, setSelectedChat] = useState<null | number>(null);
    CheckRound();
    
    function renderChat(chat: Chat) {
    
        return (
            <div onClick={()=>selectChat(chat.id)}>
            <ChatComponent chat={chat} selected={chat.id == selectedChat}/> 
            </div>
        );
        
    }
    
    useEffect(() => {
        console.log(chats.map(chat => chat.id));
    }, [])
    
    

function selectChat (chatId: number) {

    console.log(chatId);
    setSelectedChat(chatId);
};

    return  (
        <div >
            <Outlet/>
            <Navbar/>
            <div className="chats-look">
                {chats.map(renderChat)}
            </div>
        </div>
    );
}