import {Router} from "express";
import signup from "../controller/user/signup";
import login from "../controller/user/login";

const userRouter = Router()
export default userRouter

userRouter.post('/signup', signup)
userRouter.post('/login', login)