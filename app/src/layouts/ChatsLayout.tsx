import CheckRound from "../assets/UseAbilities";
import { Outlet } from "react-router";
import Navbar from "../components/Navigator";
import "./chats.css"
import { useEffect } from "react";
import { chats } from "../data/chats";
import type { Chat } from "../type/ChatType";


export default function ChatsLayout () {
    CheckRound();
    
    function renderChat(chat: Chat) {
        return (
            <div key={chat.id} className="chat-card">
                <img src={chat.avatar} alt={chat.title} className="chat-avatar" />
                <div className="chat-details">
                    <h3>{chat.title}</h3>
                    <p>Участников: {chat.user.length}</p>
                    <p>Сообщений: {chat.messeges.length}</p>
                    <p>ID чата: {chat.id}</p>
                </div>
            </div>
        );
    }
    
    useEffect(() => {
        console.log(chats.map(chat => chat.id));
    }, []);
    
    return (
        <div>
            <Outlet/>
            <Navbar/>
            <div className="chats-look">
                {chats.map(renderChat)}
            </div>
        </div>
    );
}