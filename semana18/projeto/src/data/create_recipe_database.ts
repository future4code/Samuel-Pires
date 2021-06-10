import {Recipe} from "../types/types";
import connection from "../services/connection";
import generate_id from "../services/id";

export default async function create_recipe_database(recipe : Recipe) {
  await connection('Recipe')
    .insert({
      ...recipe,
      id : generate_id()
    })
}