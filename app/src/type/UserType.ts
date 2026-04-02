import type { Post } from "./PostType";

type User ={
    id:number;
    username: string;
    avatar: string;
    description: string;
    posts: Post[];
    friends: User[];
    email: string;
    last_seen: number;
}

export type {User}