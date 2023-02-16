import { PostDB } from './../types';
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    public static TABLE_POSTS = "posts"
    
    public async findPosts(q: string | undefined): Promise <PostDB[]> {
        let postsDB

        if (q) {
            const result: PostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .where("content", "LIKE", `%${q}%`)

            postsDB = result
        } else {
            const result: PostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)

            postsDB = result
        }

        return postsDB
    }

    public async insertPost(newPostDB: PostDB) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(newPostDB)
    }
}