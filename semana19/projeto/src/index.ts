import app from "./controller/app";
import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";
import {Post} from "./business/Post";

app.use('/user', userRouter)

app.use('/post', postRouter)