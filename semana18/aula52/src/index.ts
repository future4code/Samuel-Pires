import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { login } from "./endpoints/login";
import signup from "./endpoints/signup";
import { profile } from "./endpoints/profile";

dotenv.config();

const app = express();

app.use(express.json());

app.post('/login', login)
app.post('/signup', signup)
app.put('/profile', profile)




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
