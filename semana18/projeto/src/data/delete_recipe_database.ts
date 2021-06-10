import connection from "../services/connection";

export default async function delete_recipe_database(id:string) {
  await connection('Recipe')
    .delete()
    .where({id})
}