import { Request, Response } from 'express';
import { Post } from '../models/Post';
import { PostDatabase } from './../database/PostDatabase';

export class PostController {

    public getPosts = async (req: Request, res: Response) => {
        try {
            const postDatabase = new PostDatabase()
            const postsDB = await postDatabase.getPosts()

            const posts: Post[] = postsDB.map((postDB) => new Post (
                postDB.id,
                postDB.creator_id,
                postDB.content,
                postDB.likes,
                postDB.dislikes,
                postDB.created_at,
                postDB.updated_at
            ))

            res.status(200).send(posts)

        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createPost = async (req: Request, res: Response) => {
        try {

            // IMPLEMENTAR LÓGICA DE CRIAÇÃO DE POST

        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

}