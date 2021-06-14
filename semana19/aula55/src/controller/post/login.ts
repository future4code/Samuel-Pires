import {Request, Response} from "express";
import loginBusiness from "../../bussiness/loginBusiness";

export default async function (req: Request, res: Response): Promise<any> {
  try {
    const {email, password} = req.body
    const token = await loginBusiness({email, password})
    res.status(200).send({token})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}