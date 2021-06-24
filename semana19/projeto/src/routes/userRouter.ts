import {Router} from "express";
import signup from "../controller/user/signup";
import login from "../controller/user/login";
import friendship from "../controller/user/friendship";
import undoFriendship from "../controller/user/undoFriendship";

const userRouter = Router()
export default userRouter

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.post('/friendship/:id', friendship)
userRouter.delete('/friendship/:id', undoFriendship)