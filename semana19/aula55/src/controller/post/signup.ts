import {Request, Response} from "express";
import {User} from "../../model/User";
import signupBussines from "../../bussiness/signupBussines";

export default async function (req: Request, res: Response): Promise<any> {
  try {
    const {name, email, password, role} = req.body
    const token = await signupBussines({name, email, password, role})
    res.status(201).send({token})
  } catch (err) {
    if(err.sqlMessage && err.sqlMessage.includes('Duplicate entry')){
      err.message = 'E-mail already exists.'
    }
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}