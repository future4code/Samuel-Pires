import {Request, Response} from "express";
import get_user_database from "../../data/get_user_database";
import {get_data_token} from "../../services/token";
import * as jwt from 'jsonwebtoken'


export default async function user_profile(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    if(!token){
      throw new Error('Token is required.')
    }

    const payload = get_data_token(token)

    const user = await get_user_database('id', payload.id)

    res.status(200).send({id:user.id, name:user.name, email:user.name})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}