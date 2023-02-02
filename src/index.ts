import express, { Request, Response} from 'express';
import cors from 'cors';
import { UserController } from './controller/UserController';
import { PostController } from './controller/PostController';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

// ENDPOINT DE TESTE

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

const userController = new UserController()
const postController = new PostController()

app.post("/users", userController.signUp)

app.get("/posts", postController.getPosts)