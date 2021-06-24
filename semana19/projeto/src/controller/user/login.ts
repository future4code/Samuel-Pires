import {Request, Response} from "express";
import loginUser from "../../business/user/loginUser";

const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const token = await loginUser(req.body)
    res.status(200).send({token})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default login