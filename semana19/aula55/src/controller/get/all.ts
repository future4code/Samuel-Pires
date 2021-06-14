import {Request, Response} from "express";
import allBusiness from "../../bussiness/allBusiness";

export default async function (req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization as string
    const usersData = await allBusiness(token)
    res.status(200).send({usersData})
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}