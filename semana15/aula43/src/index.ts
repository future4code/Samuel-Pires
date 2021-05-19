import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries, country} from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res:Response)=>{
  res.status(200).send(countries)
})

app.get('/countries/:id',(req: Request, res: Response)=>{
 try{
   const {id} = req.params
   if(isNaN(Number(id))){
     throw new Error('Id precisa ser um número')
   }

   const result : country | undefined = countries.find(
     c => c.id === Number(id)
   )
   if(!result){
     throw new Error('Não encontrado')
   }
   res.status(200).send(result)
 }catch (err){
   res.status(400).send({message: err.message})
 }
})


app.listen(3003, ()=>{
  console.log('Is running in http://localhost/3003')
})