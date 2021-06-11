import {Follow} from "../types/types";
import connection from "../services/connection";

export default async function delete_follow_database(follow : Follow|{user_id:string} ) {
  await connection('Follow')
    .delete()
    .where(follow)
}