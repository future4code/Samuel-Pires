import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";
import getUsers, {getUsersAll, getUsersOffset, getUsersOrder} from "./getUsers";

app.get("/", (req : Request, res: Response) => { res.send("Hello, world!") })

//EXERCÍCIO 1 E 3
app.get('/users?', async(req: Request, res: Response) => {
  try {

    const name = req.query.name as string
    const type = req.query.type as string
    const page = Number(req.query.page)

    let users
    if(page){
      if(name){
        users = await getUsersOffset(page, 'name', name)
      }
      else if(type){
        users = await getUsersOffset(page, 'type', type)
      }
      else{
        users = await getUsersOffset(page)
      }
    }
    else if(name){
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

//EXERCÍCIO 2
app.get('/users/order?', async(req: Request, res: Response) => {
  try {

    const order = req.query.order as string || 'email'
    const orderType = req.query.orderType as string || 'asc'

    const users = await getUsersOrder(order, orderType)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(res.statusCode).send({message: err.message})
  }
})

//EXERCÍCIO 4
app.get('/users/all?',async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string
    const type = req.query.type as string
    const email = req.query.email as string
    const order = req.query.order as string || 'name'
    const order_type = req.query.orderType as string || 'desc'
    const page = Number(req.query.page) || 1

    let users
    if(name)users = await getUsersAll(page, order, order_type, 'name', name)
    else if(type)users =await getUsersAll(page, order, order_type, 'type', type)
    else if(email)users = await getUsersAll(page, order, order_type, 'email', email)
    else users =await getUsersAll(page, order, order_type)

    console.table(users)
    res.status(200).send(users)

  } catch (err) {
    res.status(400).send({message: err.message})
  }
})