import { Post } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    public static TABLE_POSTS = "posts"

    // REFATORAR PARA ENCAPSULAMENTO PROTECTED
    public async getPosts(): Promise <Post[]> {
        const result = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        return result
    }
}