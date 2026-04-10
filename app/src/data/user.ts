import type { User } from "../type/UserType";
import { posts } from "./post";

const users: User[] = [
    {id: 1,
    username: 'Стасик',
    avatar: '1'  ,
    description: '1' ,
    posts: [] ,
    friends: [],
    email: 'qudniq@gmail.com',
    last_seen: 1774628006,},
    {id: 2,
    username: 'Газан',
    avatar: '3'  ,
    description: '2' ,
    posts: [] ,
    friends: [],
    email: 's2@gmail.com',
    last_seen: 1774628086,},
    {id: 3,
    username: 'Анти-Хайп',
    avatar: '3'  ,
    description: '4' ,
    posts: [] ,
    friends: [],
    email: 'ss2@gmail.com',
    last_seen: 1774628086,},
]


users[1].friends = [users[0]] 
users[2].posts = [posts[2]]
export default users; 
