import {Database} from "./data/Database";
import app from "./controller/app";
import {Request, Response} from "express";

app.get('/', (req: Request, res: Response) => {
  try {
    res.send('ok')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})