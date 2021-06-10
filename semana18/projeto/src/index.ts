import app from "./app";
import {Request, Response} from "express";
import signup from "./endpoints/signup";
import login from "./endpoints/login";
import user_profile from "./endpoints/user_profile";
import user_id from "./endpoints/user_id";

app.get('/ping', (req: Request, res: Response) => {
  try {
    res.send('pong')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.post('/signup', signup)

app.post('/login', login)

app.get('/user/profile', user_profile)
app.get('/user/:id', user_id)