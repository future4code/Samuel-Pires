import {Request, Response} from "express";
import {User} from "../types/types";
import validate_user_signup from "../validates/validate_user_signup";
import create_user_database from "../data/create_user_database";

export default async function (req: Request, res: Response): Promise<any> {
  try {
    const user = req.body as User
    const user_valide = validate_user_signup(user)

    if(typeof user_valide==='string'){
      throw new Error(user_valide)
    }

    const token = await create_user_database(user)

    res.status(201).send({token})
  } catch (err) {
    if(err.sqlMessage.includes('Duplicate entry')){
      err.message = 'E-mail already registered.'
    }
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}