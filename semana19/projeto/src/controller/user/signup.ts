import {Request, Response} from "express";
import {userDTO} from "../../model/user";
import User from "../../business/User";
import signupUser from "../../business/user/signupUser";

const signup = async (req: Request, res: Response): Promise<any> =>{
  try {
    const token = await signupUser(req.body)
    res.status(201).send({token})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default signup