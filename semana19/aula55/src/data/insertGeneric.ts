import {UserData} from "../model/User";
import connection from "../services/connection";

export default async function (tableName : string, genericData : {}) : Promise<void> {
  await connection(tableName)
    .insert(genericData)
}