import {Recipe} from "../types/types";
import connection from "../services/connection";
import {throws} from "assert";

export default async function get_recipe_database(id : string): Promise<Recipe> {
  const [recipe] = await connection('Recipe')
    .select('*')
    .where({id})
  if(!recipe){
    throw new Error("Recipe doesn't exist.")
  }
  return recipe
}