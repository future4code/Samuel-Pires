import app from "./app";
import {Request, Response} from "express";
import {connection} from "./connection";

app.get('/ping', (req: Request, res: Response) => {
  try {
    res.send('pong')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/actors/search?', async (req: Request, res: Response) => {
  try {
    const {name,gender} = req.query
    let result
    if(name){
      result = await connection.raw(`
        select * from Actor_aula45 where name='${name}'
      `)
    }
    else{
      result = await connection.raw(`
        select count(*) as qtd,gender from Actor_aula45 as genero where gender='${gender}'
      `)
    }

    res.status(200).send(result[0])
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/actors/:id/edit', async (req: Request, res: Response) => {
  try {
    const salary = Number(req.body.salary)
    const id = req.params.id
    await connection.update({salary}).where('id', id)
    res.send('Update!')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})