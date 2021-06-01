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

export async function getUsersOrder(order_param : string, order_type : string) : Promise<any> {

  const [result] = await connection.raw(`
    select id, name, email, type
    from Aula49_exercicio
    order by ${order_param} ${order_type}
  `)
  return result

}

export async function getUsersOffset(page : number, param? : string, filter? : string) : Promise<any> {
  if(!filter) {
    const [result] = await connection.raw(`
      SELECT id, name, email, type
      FROM Aula49_exercicio
      limit 5 offset ${5 * (page - 1)}
    `)
    return result
  }
  else{
    const [result] = await connection.raw(`
      select id, name, email, type
      from Aula49_exercicio
      where ${param} like "%${filter}%"
      limit 5 offset ${5*(page-1)}
    `)
    return result
  }
}

export async function getUsersAll(page:number, order:string, order_type:string, param_filter?:string, filter?:string) : Promise<any> {
  if(!filter) {
    const [result] = await connection.raw(`
      SELECT id, name, email, type
      FROM Aula49_exercicio
      order by ${order} ${order_type}
      limit 5 offset ${5 * (page - 1)}
    `)
    return result
  }
  else{
    console.log('entrei else')
    const [result] = await connection.raw(`
      select id, name, email, type
      from Aula49_exercicio
      where ${param_filter} like "%${filter}%"
      order by ${order} ${order_type}
      limit 5 offset ${5*(page-1)}
    `)
    return result
  }
}