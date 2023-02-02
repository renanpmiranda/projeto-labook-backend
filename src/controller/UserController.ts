import { UserDatabase } from './../database/UserDatabase';
import { Request, Response } from 'express';
import { User } from '../models/User';

export class UserController {

    public signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            if (typeof name !== "string") {
                res.status(400)
                throw new Error("'name' deve ser string")
            }

            if (typeof email !== "string") {
                res.status(400)
                throw new Error("'email' deve ser string")
            }

            if (typeof password !== "string") {
                res.status(400)
                throw new Error("'password' deve ser string")
            }

            const userDatabase = new UserDatabase()
            const emailDBExists = await userDatabase.findEmail(email)

            if (emailDBExists) {
                res.status(400)
                throw new Error("'email' já cadastrado.")
            }

            const newUser = new User(
                "u004",
                name,
                email,
                password,
                "normal",
                new Date().toISOString()
            )

            const newUserDB = {
                id: newUser.getId(),
                name: newUser.getName(),
                email: newUser.getEmail(),
                password: newUser.getPassword(),
                role: newUser.getRole(),
                created_at: newUser.getCreatedAt()
            }

            const newUserDatabase = userDatabase.signUp(newUserDB)

            res.status(201).send("Usuário criado com sucesso.")

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

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (typeof email !== "string") {
                res.status(400)
                throw new Error("'email' deve ser string")
            }

            if (typeof password !== "string") {
                res.status(400)
                throw new Error("'password' deve ser string")
            }

            // INSERIR LÓGICA DE LOGIN

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