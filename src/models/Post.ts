export class Post {
    constructor(
        private id: string,
        private creator_id: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private created_at: string,
        private updated_at: string
    ) {}

    public getId = (): string => {
        return this.id
    }
    public setId = (newId: string) => {
        this.id = newId
    }

    public getCreatorId = (): string => {
        return this.creator_id
    }
    public setCreatorId = (newCreatorId: string) => {
        this.creator_id = newCreatorId
    }

    public getContent = (): string => {
        return this.content
    }
    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public getLikes = (): number => {
        return this.likes
    }
    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }

    public getDislikes = (): number => {
        return this.dislikes
    }
    public setDislikes = (newDislikes: number) => {
        this.dislikes = newDislikes
    }

    public getCreatedAt = (): string => {
        return this.created_at
    }
    public setCreatedAt = (newCreatedAt: string) => {
        this.created_at = newCreatedAt
    }

    public getUpdatedAt = (): string => {
        return this.updated_at
    }
    public setUpdatedAt = (newUpdatedAt: string) => {
        this.updated_at = newUpdatedAt
    }
}