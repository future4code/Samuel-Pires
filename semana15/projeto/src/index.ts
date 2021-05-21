import express, { Request, Response } from 'express'
import cors from 'cors'
import {Statement, Client} from "./types";
import {clear_file, open_file, save_file} from "./file";
import {endereco_banco} from "./endereco_banco";
import {analise_18, analise_date} from "./data";
import {validate_cpf} from "./cpf";

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.get('/users', (req: Request, res: Response) => {
  try {
    const clients : Client[] = open_file()
    res.status(200).send(clients)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/users/balance?', (req: Request, res: Response) => {
  try {
    const {name, cpf} = req.query
    if(!name || !cpf){
      throw new Error('Informe: name e cpf.')
    }

    const clients : Client[] = open_file()

    if(clients.length===0){
      throw new Error('Não há clientes')
    }

    const client : Client | undefined = clients.find(c=>c.name===name && c.cpf===cpf)

    if(!client){
      throw new Error('Cliente não encontrado.')
    }

    res.status(200).send({balance: client.balance})

  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.post('/users', (req: Request, res: Response) => {
  try {
    const {name,cpf, birth_date} = req.body
    const date = analise_date(birth_date)
    if(!name || !cpf || !birth_date){
      throw new Error('Informe: name, cpf e birth_date.')
    }
    if(!date){
      throw new Error('Data inválida. Formato: aaaa-mm-dd')
    }
    if(!analise_18(date as Date)){
      throw new Error('Você precisa ter ao menos 18 anos.')
    }
    if(!validate_cpf(cpf)){
      throw new Error('Cpf inválido. Formato: 000.000.000-00')
    }

    const clients : Client[] = open_file()

    if(clients.findIndex(c=>c.cpf===cpf)>=0){
      throw new Error('Cpf já cadastrado.')
    }

    const client : Client = {
      name, cpf,
      birth_date: date,
      balance : 0,
      statement : []
    }

    clients.push(client)
    save_file(clients)

    res.status(200).send(client)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/users', (req: Request, res: Response) => {
  try {

  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/users/add', (req: Request, res: Response) => {
  try {
    const {name, cpf, value} = req.body
    if(!name || !cpf || isNaN(value)){
      throw new Error('Informe name, cpf e value.')
    }
    if(value<0){
      throw new Error('Você informou um valor negativo.')
    }
    const clients : Client[] = open_file()
    if(clients.length===0){
      throw new Error('Não há clientes no banco.')
    }

    const index : number = clients.findIndex(c=>c.name===name && c.cpf===cpf)

    if(index < 0){
      throw new Error('Cliente não encontrado.')
    }

    const statement : Statement = {
      date : new Date(),
      value,
      description: 'Depósito de dinheiro'
    }
    clients[index].balance+=value
    clients[index].statement.push(statement)
    save_file(clients)

    res.status(200).send('Saldo adicionado.')
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
      if(err) {
        console.log('Erro ao criar banco.txt')
        throw new Error('Erro ao criar banco.txt')
      }
    })
  }
})