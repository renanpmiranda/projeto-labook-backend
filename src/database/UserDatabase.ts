import { User } from './../types';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public static TABLE_USERS = "users"

    public async signUp(newUser: User): Promise<void> {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser)
    }

    public async findEmail(email: string): Promise <string> {
        const [ emailDBExists ] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).where({email})
        return emailDBExists
    }
}