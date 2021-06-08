import connection from "../services/connection"
export async function get_user_by_email(email: string) : Promise<any>{
  const result = await connection('Users_51')
    .select('*')
    .where({email})

  // @ts-ignore
  return result[0]
}