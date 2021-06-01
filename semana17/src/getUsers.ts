import {connection} from "./connection";

export default async function getUsers( param? : string, filter? : string) : Promise<any> {
  if(!filter) {
    const [result] = await connection.raw(`
      SELECT id, name, email, type
      FROM Aula49_exercicio;
    `)
    return result
  }
  else{
    const [result] = await connection.raw(`
      select id, name, email, type
      from Aula49_exercicio
      where ${param} like "%${filter}%"
    `)
    return result
  }
}