import { IdGenerator } from './../services/IdGenerator';
import { BadRequestError } from './../errors/BadRequestError';
import { GetPostsInput, GetPostsOutput, CreatePostInput, CreatePostOutput } from './../dtos/postDTO';
import { TokenManager } from './../services/TokenManager';
import { PostDatabase } from './../database/PostDatabase';
import { Post } from '../models/Post';

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) {}

    public getPosts = async (input: GetPostsInput): Promise<GetPostsOutput> => {
        const { q, token } = input

        if (typeof q !== "string" && q !== undefined) {
            throw new BadRequestError("'q' deve ser string ou undefined")
        }

        if (typeof token !== "string"){
            throw new BadRequestError("'token' inválido")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload === null){
            throw new BadRequestError("'token' inválido")
        }

        const postsDB = await this.postDatabase.findPosts(q)

        const posts = postsDB.map((postDB) => {
            const post = new Post(
                postDB.id,
                postDB.creator_id,
                postDB.content,
                postDB.likes,
                postDB.dislikes,
                postDB.created_at,
                postDB.updated_at
            )

            return post.toBusinessModel()
        })

        const output: GetPostsOutput = posts

        return output
    }

    public createPost = async (input: CreatePostInput) => {
        const { content, token } = input

        if (content === undefined) {
            throw new BadRequestError("'content' deve possuir pelo menos 1 caractere")
        }

        if (typeof content !== "string") {
            throw new BadRequestError("'q' deve ser string")
        }

        if (typeof token !== "string"){
            throw new BadRequestError("'token' inválido. Deve ser uma string")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload === null){
            throw new BadRequestError("'token' inválido")
        }

        const id = this.idGenerator.generate()

        const newPost = new Post(
            id,
            payload.id,
            content,
            0,
            0,            
            new Date().toISOString(),
            new Date().toISOString()
        )

        const newPostDB = newPost.toDBModel()
        await this.postDatabase.insertPost(newPostDB) 
        
        const output: CreatePostOutput ={
            message: "Post criado com sucesso",
            content
        }

        return output
    }
}