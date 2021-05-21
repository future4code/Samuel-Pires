export type Statement = {
  value : number,
  date : Date,
  description : string
}

export type Client = {
  name : string,
  cpf : string,
  birth_date : Date,
  balance : number,
  statement: Statement[]
}