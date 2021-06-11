import {Request, Response} from "express";
import {get_data_token} from "../../services/token";
import create_follow_database from "../../data/create_follow_database";

export default async function follow(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    const user_to_follow_id = req.body.user_to_follow_id as string
    if(!token || user_to_follow_id.length!==36){
      throw new Error('Token and id (36 characters) is required.')
    }

    const payload = get_data_token(token)
    if(payload.id===user_to_follow_id){
      throw new Error("Can't follow yourself")
    }
    await create_follow_database({user_id:payload.id, user_to_follow_id: user_to_follow_id})

    res.status(200).send()
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}