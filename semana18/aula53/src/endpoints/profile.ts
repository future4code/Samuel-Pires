import {Request, Response} from "express";
import { Authentication_data, get_data_token, Role } from "../services/token";

export async function profile(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization as string
    if(!token){
      res.statusCode = 401
      throw new Error('Necessário token.')
    }
    
    const user = get_data_token(token)
    if(user.role.toLowerCase()!==Role.ADMIN){
      res.status(401).send()
    }
    
    res.status(200).send()
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}