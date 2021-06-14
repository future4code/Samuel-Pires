import {generate_id} from "../services/generate_id";
import connection from "../services/connection";
import {generate_token, Role} from "../services/token";

type Data = {
  email:string,
  password:string,
  role:Role
}

export async function create_user(data : Data){
  const id = generate_id()
  await connection('Users_51')
    .insert({
      ...data,
      id
    })
  return generate_token({id, role:data.role})
}