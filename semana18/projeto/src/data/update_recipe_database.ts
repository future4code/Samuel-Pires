import {Recipe} from "../types/types";
import connection from "../services/connection";

export default async function update_recipe_database(recipe: Recipe) {
  await connection('Recipe')
    .update(recipe)
    .where('id', recipe.id)
}