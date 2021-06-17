import {Request, Response} from "express";
import {get_data_token} from "../../services/token";
import {ROLE} from "../../enums/enums";
import delete_recipe_database from "../../data/delete_recipe_database";
import get_recipe_database from "../../data/get_recipe_database";

export default async function delete_recipe(req: Request, res: Response): Promise<any> {
  try {
    const id = req.params.id
    const token = req.headers.authorization
    if(id.length!==36 || !token){
      throw new Error('Token and id(36 characters) is required.')
    }

    const payload = get_data_token(token)
    console.table(payload)
    if(payload.role===ROLE.ADMIN){
      await delete_recipe_database(id)
    }
    else{
      const recipe = await get_recipe_database(id)
      console.table(recipe)
      if(recipe.user_id!==payload.id){
        throw new Error('Only proprietary or admin can delete recipe.')
      }
      else{
        await delete_recipe_database(id)
      }
    }

    res.status(200).send()
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}