import type { Messege } from "./MessegeType";
import type { User } from "./UserType"


type Chat = {
    id: number;
    user: User[];
    messeges: Messege[];
    title: string;
    avatar: string;
}

export type{Chat}