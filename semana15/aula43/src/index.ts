import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('')




app.listen(3003, ()=>{
  console.log('Is running in http://localhost/3003')
})