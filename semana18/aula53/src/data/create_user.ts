import {generate_id} from "../services/generate_id";
import connection from "../services/connection";
import {generate_token, Role} from "../services/token";
import {Address, AddressSQL} from '../data/types'
import get_address from "./get_address";

type Data = {
  email:string,
  password:string,
  role:Role,
  cep:string,
  complemento?:string,
  numero:number
}

export async function create_user(data : Data){
  const id = generate_id()

  const address : Address | null= await get_address(data.cep)

  if(!address){
    return false
  }

  const addressSQL : AddressSQL = {
    ...address as Address,
    cep: data.cep,
    complemento:data.complemento,
    numero:data.numero
  }

  console.table(addressSQL)

  await connection('Users_51')
    .insert({
      email:data.email,
      password:data.password,
      role:data.role,
      id
    })

  console.count('c:')

  await connection('Address')
    .insert({
      ...addressSQL,
      id : generate_id(),
      user_id: id
  })
  console.count('c:')
  return generate_token({id, role:data.role})
}