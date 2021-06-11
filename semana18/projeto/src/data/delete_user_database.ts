import connection from "../services/connection";

export default async function delete_user_database(id: string) {
  await connection('Follow')
    .delete()
    .where({user_id:id})
    .orWhere({user_to_follow_id:id})
  await connection('Recipe')
    .delete()
    .where({user_id:id})
  await connection('User')
    .delete()
    .where({id})
}