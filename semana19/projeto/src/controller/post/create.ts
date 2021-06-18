import {Request, Response} from "express";
import createPost from "../../business/post/createPost";

const create = async (req: Request, res: Response): Promise<any> => {
  try {
    await createPost(req.body, req.headers.authorization as string)
    res.status(201).send({message : 'Created!'})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default create