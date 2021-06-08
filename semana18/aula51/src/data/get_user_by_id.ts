import connection from "../connection";

export async function get_user_by_id(id:string){
  const result = await connection('Users_51')
    .select('*')
    .where({id})
  return result[0]
}