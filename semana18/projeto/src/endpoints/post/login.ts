import {Request, Response} from "express";
import {User} from "../../types/types";
import validate_user_login from "../../validates/validate_user_login";
import get_user_database from "../../data/get_user_database";
import {compare} from "bcryptjs";
import {generate_token} from "../../services/token";

export default async function login(req: Request, res: Response): Promise<any> {
  try {
    const user = req.body as User
    const user_valide = validate_user_login(user)

    if(typeof user_valide==='string'){
      throw new Error(user_valide)
    }

    const user_database = await get_user_database('email',user.email)
    if(!user_database){
      throw new Error('E-mail or password incorrect.')
    }

    const compare_password = await compare(user.password, user_database.password)

    if(!compare_password){
      throw new Error('E-mail or password incorrect.')
    }

    const token = generate_token({id:user_database.id, role:user_database.role})

    res.status(200).send({token})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}