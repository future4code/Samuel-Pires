import {Request, Response} from "express";
import validate_email from "../services/validate_email";
import {create_user} from "../data/create_user";
import {generate_hash} from "../services/hash";
import { Role } from "../services/token";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const {email, password, role} = req.body

    if (!email || !password || !(role in Role)) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'password', 'email' e 'role' corretamente.")
    }

    if (!validate_email(email)) {
      throw new Error("Preencha 'email' no formato 'email@email.com'")
    }

    if(password.length<6){
      throw new Error('Password precisa de 6 caracteres ou mais')
    }

    const token = await create_user({email, password:generate_hash(password), role})

    res.status(201).send({token})

  } catch (error) {
    res.send({message: error.message || error.sqlMessage})
  }
}