import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";
import getUsers from "./getUsers";

app.get("/", (req : Request, res: Response) => { res.send("Hello, world!") })

app.get('/users?', async(req: Request, res: Response) => {
  try {

    const name = req.query.name as string
    const type = req.query.type as string


    let users
    if(name){
      users = await getUsers('name', name)
    }
    else if(type){
      users = await getUsers('type', type)
    }
    else{
      users = await getUsers()
    }

    if(!users.length){
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(res.statusCode).send({message: err.message})
  }
})