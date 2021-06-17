import {Request, Response} from "express";
import {Recipe} from "../../types/types";
import validate_recipe from "../../validates/validate_recipe";
import get_recipe_database from "../../data/get_recipe_database";
import {get_data_token} from "../../services/token";
import {ROLE} from "../../enums/enums";
import update_recipe_database from "../../data/update_recipe_database";

export default async function put_recipe(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    const id = req.params.id
    const recipe = req.body as Recipe

    if(!token || id.length!==36){
      throw new Error('Token and id (36 characters) of recipe is required')
    }
    const payload = get_data_token(token)

    const valide_recipe = validate_recipe(recipe)
    //No caso de alterar receita, apenas title ou description basta, não é exigido os dois
    if(typeof valide_recipe==='string' && valide_recipe.length>39){
      throw new Error(valide_recipe)
    }
    const recipe_database = await get_recipe_database(id)
    if(recipe_database.user_id!==payload.id && payload.role!==ROLE.ADMIN){
      res.statusCode = 403
      throw new Error('Only administrators can change the recipe that is not theirs.')
    }

    recipe.id = id
    await update_recipe_database(recipe)

    res.status(200).send()
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}