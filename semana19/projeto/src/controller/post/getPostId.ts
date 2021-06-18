import {Request, Response} from "express";
import getPost from "../../business/post/getPost";

const getPostId=async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id
    const [post] = await getPost(req.headers.authorization as string,{id} )
    res.status(200).send({post})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default getPostId