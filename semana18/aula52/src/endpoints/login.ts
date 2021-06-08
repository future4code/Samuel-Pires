import {Request, Response} from "express";
import validate_email from "../services/validate_email";
import {get_user_by_email} from "../data/get_user_by_email";
import {generate_token} from "../services/token";
import { compare_hash } from "../services/hash";

export async function login(req: Request, res: Response): Promise<any> {
  try {
    const {email, password} = req.body
    if(!email || !password){
      throw new Error('Informe "email" e "password".')
    }
    if(!validate_email(email)){
      throw new Error('Formato de email inválido. Aceito: email@email.email')
    }

    const user = await get_user_by_email(email)

    if(!user || !compare_hash(password, user.password)){
      throw new Error('Email ou senha inválidos.')
    }

    const token = generate_token({id: user.id})

    res.status(200).send({token})

  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}