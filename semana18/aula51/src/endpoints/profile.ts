import {Request, Response} from "express";

export async function profile(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization as string
    if(!token){
      res.statusCode = 401
      throw new Error('Necessário token.')
    }
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}