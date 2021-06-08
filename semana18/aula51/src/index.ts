import app from "./app"
import signup from './endpoints/signup'
import {login} from "./endpoints/login";
import {profile} from "./endpoints/profile";
import {Request, Response} from "express";

app.post('/user/signup', signup)
app.post('/login', login)
app.get('/user/profile', profile)

// app.get('/user/profile', async(req: Request, res: Response) => {
//   await profile(req, res)
// })