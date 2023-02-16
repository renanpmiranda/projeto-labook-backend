import { postRouter } from './router/postRouter';
import express, { Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './router/userRouter';

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

// ENDPOINT DE TESTE

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.use("/users", userRouter)
app.use("/posts", postRouter)