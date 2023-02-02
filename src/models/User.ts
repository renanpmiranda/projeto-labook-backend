export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string,
        private created_at: string,
    ) {}

    public getId = (): string => {
        return this.id
    }
    public setId = (newId: string) => {
        this.id = newId
    }

    public getName = (): string => {
        return this.name
    }
    public setName = (newName: string) => {
        this.name = newName
    }

    public getEmail = (): string => {
        return this.email
    }
    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public getPassword = (): string => {
        return this.password
    }
    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public getRole = (): string => {
        return this.role
    }
    public setRole = (newRole: string) => {
        this.role = newRole
    }

    public getCreatedAt = (): string => {
        return this.created_at
    }
    public setCreatedAt = (newCreatedAt: string) => {
        this.created_at = newCreatedAt
    }
}