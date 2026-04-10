import type { Post } from "../type/PostType";
import { comments } from "./Comments";

export const posts: Post[] = [

    {
    id: 1,
    text: 'se',
    image: '1',
    comments: [comments[0], comments[1]],
    from_user: 1,
    created_at: 1775229023,
    },
    {
    id:2,
    text: 'e',
    image: '1',
    comments: [],
    from_user: 2,
    created_at: 1775228932,
    }
]


