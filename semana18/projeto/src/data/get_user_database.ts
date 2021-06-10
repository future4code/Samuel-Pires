import connection from "../services/connection";
import {User} from "../types/types";

export default async function get_user_database(email : string) : Promise<undefined | User>{
  const [user] = await connection('User')
    .select('id','password','role')
    .where({email})

  if(!user){
    return undefined
  }
  return user as User
}