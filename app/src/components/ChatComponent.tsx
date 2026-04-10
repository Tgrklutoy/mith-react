import type { Chat } from "../type/ChatType";
import "./Chatcomponent.css"

export default function ChatComponent (props: {chat: Chat}){
    
    



    return(
        <div  key={props.chat.id} className="chat-card">
        <img src={props.chat.avatar} alt={props.chat.title} className="chat-avatar" />
        <div className="chat-details">
            
            <h3>{props.chat.title}</h3>
            <p>Участников: {props.chat.user.length}</p>
            <p>Сообщений: {props.chat.messeges.length}</p>
            <p>ID чата: {props.chat.id}</p>
        </div>
    </div>
    )
}