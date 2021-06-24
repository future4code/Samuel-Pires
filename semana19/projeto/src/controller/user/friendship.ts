import {Request, Response} from "express";
import friendshipUser from "../../business/user/friendship/friendshipUser";

const friendship = async (req: Request, res: Response): Promise<any> => {
  try {
    await friendshipUser({id:req.params.id}, req.headers.authorization as string)
    res.status(200).send({message: 'Friendship created!'})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default friendship