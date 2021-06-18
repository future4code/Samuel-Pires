import {Request, Response} from "express";
import {userDTO} from "../../model/user";
import User from "../../business/User";

const signup = async (req: Request, res: Response): Promise<any> =>{
  try {
    const body = req.body as userDTO
    const user = new User(body)
    const token = await user.signup()
    res.status(201).send({token})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default signup