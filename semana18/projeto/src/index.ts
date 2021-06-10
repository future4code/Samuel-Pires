import app from "./app";
import {Request, Response} from "express";
import signup from "./endpoints/signup";

app.get('/ping', (req: Request, res: Response) => {
  try {
    res.send('pong')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.post('/signup', signup)