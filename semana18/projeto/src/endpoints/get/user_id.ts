import {Request, Response} from "express";
import get_user_database from "../../data/get_user_database";
import {get_data_token} from "../../services/token";

export default async function user_id(req: Request, res: Response): Promise<any> {
  try {
    const id = req.params.id
    const token = req.headers.authorization
    if(!token || id.length!==36){
      throw new Error('Token and id (36 characters) is required.')
    }

    get_data_token(token)

    const user = await get_user_database('id', id)

    res.status(200).send({id:user.id, name:user.name, email:user.email})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}