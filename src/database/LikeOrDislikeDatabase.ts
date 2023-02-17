import { LikesDB } from './../types';
import { BaseDatabase } from "./BaseDatabase";

export class LikeOrDislikeDatabase extends BaseDatabase {

    public static TABLE_LIKES_DISLIKES = "likes_dislikes"

    public async insertLike(newLikeDB: LikesDB) {
        await BaseDatabase
            .connection(LikeOrDislikeDatabase.TABLE_LIKES_DISLIKES)
            .insert(newLikeDB)
    }

    public async findLikesByUserId(userId: string) {
        const [ likesDB ]: LikesDB[] | undefined[] = await BaseDatabase
            .connection(LikeOrDislikeDatabase.TABLE_LIKES_DISLIKES)
            .where({ user_id: userId })

        return likesDB
    }
}