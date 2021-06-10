import app from "./app";
import {Request, Response} from "express";
import signup from "./endpoints/post/signup";
import login from "./endpoints/post/login";
import user_profile from "./endpoints/get/user_profile";
import user_id from "./endpoints/get/user_id";
import post_recipe from "./endpoints/post/post_recipe";
import get_recipe from "./endpoints/get/get_recipe";

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

app.post('/recipe', post_recipe)

app.get('/recipe/:id', get_recipe)
app.put('/recipe')