import express, { Request, Response } from 'express'
import cors from 'cors'
import {Statement, Client} from "./types";
import {clear_file, open_file, save_file} from "./file";
import {endereco_banco} from "./endereco_banco";
import {analise_18, analise_date, analise_Today} from "./data";
import {validate_cpf} from "./cpf";
import {refresh} from "./refresh";
import {transfer} from "./transfer";

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.get('/users', (req: Request, res: Response) => {
  try {
    const clients = open_file()
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

    const clients = open_file()

    if(clients.length===0){
      throw new Error('Não há clientes')
    }

    const client = clients.find(c=>c.name===name && c.cpf===cpf)

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

    const clients = open_file()

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

app.post('/users/pay', (req: Request, res: Response) => {
  try {
    const {cpf, description, value, date} = req.body
    if(!cpf || !value || isNaN(value) || !description){
      throw new Error('Informe: cpf, value e description.')
    }
    if(value<=0){
      throw new Error('Informe um valor positivo.')
    }
    let dateT
    if(date)dateT = analise_date(date)
    else dateT = new Date()

    if(!dateT){
      throw new Error('Data informada inválida')
    }

    if(!analise_Today(dateT)){
      throw new Error('Você não pode informar uma data passada.')
    }

    const clients = open_file()

    const index = clients.findIndex(c=>c.cpf===cpf)

    if(index<0){
      throw new Error('Cliente não encontrado.')
    }

    if(value>clients[index].balance){
      throw new Error('Saldo insuficiente.')
    }

    const statement : Statement={
      value: value*-1,
      date: dateT,
      description,
      refresh : false
    }

    clients[index].statement.push(statement)
    save_file(clients)

    res.status(200).send(statement)
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
    if(value<=0){
      throw new Error('Informe um valor positivo.')
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
      description: 'Depósito de dinheiro',
      refresh: true
    }
    clients[index].balance+=value
    clients[index].statement.push(statement)
    save_file(clients)

    res.status(200).send('Saldo adicionado.')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/users/refresh?', (req: Request, res: Response) => {
  try {
    const {cpf} = req.query
    if(!validate_cpf(cpf as string)){
      throw new Error('Informe: cpf.')
    }

    const clients = open_file()
    const index = clients.findIndex(c=>c.cpf===cpf)

    if(index<0){
      throw new Error('Cliente não encontrado.')
    }

    const client = refresh(clients[index])
    clients[index] = client
    save_file(clients)
    res.status(200).send(client)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/users/transfer', (req: Request, res: Response) => {
  try {
    const {user,beneficiary, value} = req.body
    if(!user.name || !user.cpf || !beneficiary.name || !beneficiary.cpf || isNaN(value)){
      throw new Error('Informe: user{name,cpf}, beneficiary{name,cpf}, value')
    }
    if(!validate_cpf(user.cpf) || !validate_cpf(beneficiary.cpf)){
      throw new Error('Cpf no formato: 000.000.000-00')
    }
    if(value<0){
      throw new Error('Informe um valor positivo.')
    }

    let clients = open_file()
    const indexUser = clients.findIndex(c=>{
      return c.name===user.name && c.cpf===user.cpf
    })
    if(indexUser<0){
      throw new Error('Cliente usuário não encontrado.')
    }
    const indexBenef = clients.findIndex(c=>c.name===beneficiary.name && c.cpf===beneficiary.cpf)
    if(indexBenef<0){
      throw new Error('Cliente beneficiário não encontrado.')
    }

    clients = transfer(clients, indexUser, indexBenef, value)
    save_file(clients)
    res.status(200).send('Transferência realizada.')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.delete('/users', (req: Request, res: Response) => {
  try {
    clear_file()
    res.status(200).send('Banco limpo')
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
        console.log('Erro ao criar banco.json')
        throw new Error('Erro ao criar banco.json')
      }
    })
  }
})