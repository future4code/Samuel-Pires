import {generate_id} from "../services/generate_id";
import connection from "../connection";
import {generate_token} from "../services/token";

type Data = {
  email:string,
  password:string
}

export async function create_user(data : Data){
  const id = generate_id()
  await connection('Users_51')
    .insert({
      ...data,
      id
    })

  return generate_token({id})
}