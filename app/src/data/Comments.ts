import type { Comment } from "../type/CommentType";

export const comments : Comment[] = [
    {
    id: 1,
    from_user: 1,
    text: 'shalom',
    replies: [],
    image: '1',
    created_at: 11092001,
    comment_origin: null,
    post: 1,
    },
    {
    id: 2,    
    from_user: 2,
    text: 'hello',
    replies: [],
    image: '2',
    created_at: 2202,
    comment_origin: 1,
    post: 1,
    },
]

comments[0].replies = [comments[1]]