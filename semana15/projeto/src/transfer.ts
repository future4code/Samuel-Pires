import {Client, Statement} from "./types";

export function transfer(clients:Client[], indexUser:number, indexBenef:number, value:number) : Client[]{
  if(clients[indexUser].balance<value){
    throw new Error('Saldo insuficiente')
  }

  const user : Statement = {
    refresh:false,
    value: value*-1,
    description: 'Transferência bancária para ' + clients[indexBenef].name,
    date: new Date()
  }
  const benef : Statement = {
    refresh: false,
    value: value,
    description: 'Transferência recebida de ' + clients[indexUser].name,
    date: new Date()
  }

  clients[indexUser].statement.push(user)
  clients[indexBenef].statement.push(benef)

  return clients
}