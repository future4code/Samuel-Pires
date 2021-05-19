import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries} from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res:Response)=>{
  res.status(200).send(countries)
})




app.listen(3003, ()=>{
  console.log('Is running in http://localhost/3003')
})