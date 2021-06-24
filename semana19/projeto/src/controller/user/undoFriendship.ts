import {Request, Response} from "express";
import undoFriendshipUser from "../../business/user/friendship/undoFriendshipUser";

const undoFriendship=async (req: Request, res: Response): Promise<any> => {
  try {
    await undoFriendshipUser({id:req.params.id}, req.headers.authorization as string)
    res.status(200).send({message: 'Friendship broken'})
  } catch (err) {
    res.status(err.statusCode || 400).send({message: err.message || err.sqlMessage})
  }
}

export default undoFriendship