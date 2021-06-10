import connection from "../services/connection";
import {User} from "../types/types";

export default async function get_user_database(key: string, value: string) : Promise<User | undefined>{
  const [user] = await connection('User')
    .select('*')
    .where({[key]:value})

  if(!user){
    return undefined
  }
  return user as User
}