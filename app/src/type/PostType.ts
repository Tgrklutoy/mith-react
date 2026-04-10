import type { Comment } from "./CommentType";

type Post = {
    id: number;
    text: string;
    image: string;
    comments: Comment[]
    from_user: number;
    created_at: number;
}
export type { Post }