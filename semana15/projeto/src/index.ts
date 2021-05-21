import express, { Request, Response } from 'express'
import cors from 'cors'
import {Statement, Client} from "./types";
import {clear_file, open_file, save_file} from "./file";
import {endereco_banco} from "./endereco_banco";
import {analise_18, analise_date} from "./data";

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})


app.post('/users', (req: Request, res: Response) => {
  try {
    const {name,cpf, birth_date} = req.body
    if(!name || !cpf || !birth_date){
      throw new Error('Por favor, informe name, cpf e birth_date.')
    }
    if(!analise_date(birth_date)){
      throw new Error('Por favor, informe um data válida no formato: aaaa-mm-dd.')
    }
    if(!analise_18(birth_date)){
      throw new Error('Você precisa ter ao menos 18 anos.')
    }
    const client : Client = {
      name, cpf, birth_date,
      balance : 0,
      statement : []
    }
    // const clients : Client[] = open_file()
    // clients.push(client)
    // console.table(clients)
    // save_file(clients)
    res.status(200).send(client)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})



app.listen(3003, () => {
  console.log('Server is running at port 3003')
  try{
    let fs = require('fs')
    const banco =  JSON.parse(fs.readFileSync(endereco_banco).toString())
  }
  catch (err){
    let fs = require('fs')
    fs.writeFile(endereco_banco, JSON.stringify('{}'), (err: Error)=>{
      if(err) throw new Error('Erro ao criar banco.txt')
    })
  }
})