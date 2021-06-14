import app from "./controller/app";
import signup from "./controller/post/signup";
import login from "./controller/post/login";
import all from "./controller/get/all";
import del from "./controller/del/del";

app.post('/signup', signup)
app.post('/login', login)
app.get('/all', all)
app.delete('/:id', del)