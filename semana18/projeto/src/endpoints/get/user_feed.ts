import {Request, Response} from "express";
import get_user_feed_database from "../../data/get_user_feed_database";
import {get_data_token} from "../../services/token";
import {date_string} from "../../services/date";

export default async function user_feed(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization as string
    if(!token){
      throw new Error('Token is required.')
    }

    const payload = get_data_token(token)

    const recipes = await get_user_feed_database(payload.id)
    recipes.forEach((recipe : any)=>{
      recipe.create_at = date_string(recipe.create_at)
    })

    res.status(200).send({recipes})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}