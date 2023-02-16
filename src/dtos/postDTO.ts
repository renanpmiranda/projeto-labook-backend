import { PostModel } from './../types';

export interface GetPostsInput {
    q: string,
    token: string | undefined
}

export type GetPostsOutput = PostModel[]

export interface CreatePostInput {
    content: unknown,
    token: string | undefined
}

export interface CreatePostOutput {
    message: string,
    content: string
}