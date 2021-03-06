import {Request, Response} from "express";
import connection from "../connection";
import {user} from "../types";
import {generate_id} from "../services/generate_id";
import {Authentication_data, generate_token} from "../services/token";
import validate_email from "../services/validate_email";
import {create_user} from "../data/create_user";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const {email, password} = req.body

    if (!email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'password' e 'email'")
    }

    if (!validate_email(email)) {
      throw new Error("Preencha 'email' no formato 'email@email.com'")
    }

    if(password.length<6){
      throw new Error('Password precisa de 6 caracteres ou mais')
    }

    const token = await create_user({email, password})

    res.status(201).send({token})

  } catch (error) {
    res.send({message: error.message || error.sqlMessage})
  }
}