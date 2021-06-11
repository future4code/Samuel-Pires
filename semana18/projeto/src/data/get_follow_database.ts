import {Follow} from "../types/types";
import connection from "../services/connection";

export default async function get_follow_database(follow : Follow):Promise<Follow[]>{
  return connection('Follow')
    .select('*')
    .where(follow);
}