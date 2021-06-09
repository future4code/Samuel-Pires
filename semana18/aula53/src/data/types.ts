export type Address = {
  logradouro : string,
  bairro : string,
  cidade : string,
  estado : string
}

export type AddressSQL = {
  logradouro : string,
  bairro : string,
  cidade : string,
  estado : string,
  complemento? : string,
  numero : number,
  cep : string
}