import {Request, Response} from "express";
import {get_data_token} from "../../services/token";
import delete_follow_database from "../../data/delete_follow_database";

export default async function (req: Request, res: Response): Promise<any> {
  try {
    const user_to_unfollow_id  = req.body.user_to_unfollow_id as string
    const token = req.headers.authorization
    if(!token || user_to_unfollow_id.length!==36){
      throw new Error('Token and id (36 characters) is required.')
    }

    const payload = get_data_token(token)
    if(payload.id===user_to_unfollow_id){
      throw new Error("Can't unfollow yourself")
    }

    await delete_follow_database({user_id:payload.id, user_to_follow_id:user_to_unfollow_id})

    res.status(200).send()
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}