import {Request, Response} from "express";
import {Recipe} from "../../types/types";
import {get_data_token} from "../../services/token";
import validate_recipe from "../../validates/validate_recipe";
import create_recipe_database from "../../data/create_recipe_database";

export default async function post_recipe(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    const recipe = req.body as Recipe

    if(!token){
      throw new Error('Token is required.')
    }

    const payload = get_data_token(token)
    const valide_recipe = validate_recipe(recipe)

    if(typeof valide_recipe==='string'){
      throw new Error(valide_recipe)
    }

    recipe.create_at = Date.now()
    recipe.user_id = payload.id
    await create_recipe_database(recipe)

    res.status(201).send({message:'Created!'})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}