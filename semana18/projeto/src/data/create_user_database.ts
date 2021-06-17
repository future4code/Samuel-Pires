import {User} from "../types/types";
import connection from "../services/connection";
import generate_id from "../services/id";
import {generate_hash} from "../services/hash";
import {generate_token} from "../services/token";

export default async function create_user_database(user : User) : Promise<string> {
  const id = generate_id()
  await connection('User')
    .insert({
      ...user,
      id,
      password: generate_hash(user.password)
    })
  return generate_token({id,role:user.role})
}