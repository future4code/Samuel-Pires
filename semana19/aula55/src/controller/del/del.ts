import {Request, Response} from "express";
import deleteBusiness from "../../bussiness/deleteBusiness";

export default async function del(req: Request, res: Response): Promise<any> {
  try {
    const id = req.params.id
    const token = req.headers.authorization as string
    await deleteBusiness(id, token)
    res.status(200).send({message: 'User deleted!'})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}