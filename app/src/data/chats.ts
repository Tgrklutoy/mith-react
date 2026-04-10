import type { Chat } from "../type/ChatType";
import users from "./user";

export const chats: Chat[]= [
    {
        id: 1,
    user: [users[1], users[0]],
    messeges: [],
    title: 'shalom',
    avatar: 'imagine an image',
    },
    {
        id: 2,
    user: [users[1], users[2]],
    messeges: [],
    title: 'hello',
    avatar: 'imagine an image',
    },
]