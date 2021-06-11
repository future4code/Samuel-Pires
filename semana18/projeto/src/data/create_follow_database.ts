import {Follow} from "../types/types";
import connection from "../services/connection";
import get_follow_database from "./get_follow_database";

export default async function create_follow_database(follow : Follow) {
  const followers = await get_follow_database(follow)
  if(followers.length>0){
    throw new Error('Already follow.')
  }
  await connection('Follow').insert(follow)
}