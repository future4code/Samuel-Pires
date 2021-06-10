import connection from "../services/connection";
import {User} from "../types/types";

export default async function get_user_database(key: string, value: string) : Promise<User>{
  const [user] = await connection('User')
    .select('*')
    .where({[key]:value})

  if(!user){
    throw new Error("User doesn't exist.")
  }
  return user as User
}