import {Request, Response} from "express";
import app from "./app";
import {validate_email} from "./validate_email";
import {User} from "./enum_type";
import knex from "knex";
import {connection} from "./connection";


app.get('/ping', (req: Request, res: Response) => {
  try {
    res.status(201).send('pong')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/user/:id', async(req: Request, res: Response) => {
  try {
    const {id} = req.params
    if(!id){
      throw new Error('Por favor preencha o id.')
    }

    const result = await connection('Users_projeto16').select('id','nickname').where('id', id)
    if(result.length===0){
      throw new Error('Não existe usuário com este id.')
    }
    res.status(200).send(result[0])
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/user', async (req: Request, res: Response) => {
  try {
    const {name, nickname, email} = req.body

    if(!name || !nickname || !email){
      throw new Error('Todos os campos devem ser preenchidos.')
    }
    if(typeof name!='string' || typeof nickname!='string' || typeof email!='string'){
      throw new Error('Todos os campos devem ser do tipo string.')
    }
    if(!validate_email(email)) {
      throw new Error('Email inválido.')
    }

    const user : User = {
      id : Date.now().toString(),
      name, nickname, email
    }

    await connection('Users_projeto16').insert(user)

    res.status(200).send('Created!')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

