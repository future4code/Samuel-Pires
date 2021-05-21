import {Client} from "./types";
import {endereco_banco} from "./endereco_banco";

export function open_file():Client[]{
  let fs = require('fs')
  const banco =  JSON.parse(fs.readFileSync(endereco_banco).toString())
  if(banco.clients)return banco.clients
  else return []
}

export function save_file(clients : Client[]){
  let fs = require('fs')
  const banco : {clients:Client[]} = {
    clients : clients
  }
  fs.writeFile(endereco_banco, JSON.stringify(banco), (err: Error)=>{
    if(err) throw new Error('Erro ao salvar no banco.txt')
  })
}