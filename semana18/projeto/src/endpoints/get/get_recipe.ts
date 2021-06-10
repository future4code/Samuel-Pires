import {Request, Response} from "express";
import {get_data_token} from "../../services/token";
import validate_recipe from "../../validates/validate_recipe";
import {Recipe} from "../../types/types";
import update_recipe_database from "../../data/update_recipe_database";
import get_recipe_database from "../../data/get_recipe_database";
import {date_string} from "../../services/date";

export default async function get_recipe(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    const id = req.params.id
    if(!id || !token){
      throw new Error('Token and id is required.')
    }

    get_data_token(token)
    const recipe = await get_recipe_database(id) as Recipe

    res.status(200).send({
      ...recipe,
      create_at : date_string(recipe.create_at)
    })
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}