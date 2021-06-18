import {Router} from "express";
import create from "../controller/post/create";
import getPostId from "../controller/post/getPostId";

const postRouter = Router()
export default postRouter

postRouter.post('/create', create)
postRouter.get('/:id', getPostId)