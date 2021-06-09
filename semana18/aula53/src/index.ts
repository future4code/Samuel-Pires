import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { login } from "./endpoints/login";
import signup from "./endpoints/signup";
import { profile } from "./endpoints/profile";
import get_address from "./data/get_address";
import connection from "./services/connection";

dotenv.config();

const app = express();

app.use(express.json());

app.post('/login', login)
app.post('/signup', signup)
app.put('/profile', profile)

app.get('/get',async (req: Request, res: Response) => {
  try {
    const result = await connection('Users_51')
      .select('*')
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

