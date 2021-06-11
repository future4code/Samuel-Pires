import {Request, Response} from "express";
import {get_data_token} from "../../services/token";
import {ROLE} from "../../enums/enums";
import delete_user_database from "../../data/delete_user_database";

export default async function delete_user(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization
    const id = req.query.id as string|| undefined
    if(!token){
      throw new Error('Token is required.')
    }

    const payload = get_data_token(token)
    if(payload.role===ROLE.ADMIN){
      if(id && id.length!==36){
        throw new Error('Id (36 characters) is required.')
      }
      await delete_user_database(id || payload.id)
    }
    else if(id){
      throw new Error('Only owner or admin can delete the account.')
    }
    else{
      await delete_user_database(payload.id)
    }
    res.status(200).send('Ok')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}