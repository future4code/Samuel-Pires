import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import {userRouter} from "./routes/userRouter";
import {taskRouter} from "./routes/taskRouter";


app.use('/user', userRouter)
app.use('/task', taskRouter)
