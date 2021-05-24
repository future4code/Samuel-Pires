import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries, country, CONTINENTS} from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res:Response)=>{
  res.status(200).send(countries)
})

app.get('/countries/search', (req: Request, res: Response) => {
  const includes = (str1:string, str2:string) : boolean =>{
    return str1.toLowerCase().includes(str2.toLowerCase())
  }

  try{
    const name = req.query.name as string
    const capital = req.query.capital as string
    const continent = req.query.continent as string

    if(!name && !capital && !continent){
      throw new Error('Por favor, passe os parâmetros corretamente.')
    }

    const result : country[] = countries.filter(c=>{
      if(name){
        if(!includes(c.name, name))return false
      }
      if(capital){
        if(!includes(c.capital, capital))return false
      }
      if(continent){
        if(!includes(c.continent, continent))return false
      }
      return true
    })
    if(result.length===0){
      throw new Error('Nenhum resultado correspondente')
    }
    res.send(result)
  }catch (err){
    res.status(400).send({message: err.message})
  }
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

app.put('/countries/edit/:id',(req:Request, res:Response)=>{
  try{
    const {id} = req.params
    const name = req.body.name as string
    const capital = req.body.capital as string

    if(isNaN(Number(id))){
      throw new Error('Id precisa ser um número')
    }

    const index = countries.findIndex(c=>c.id===Number(id))
    if(index<0){
      throw new Error('País não encontrado')
    }
    console.table(countries[index])
    if(name){
      countries[index].name = name
    }
    if(capital){
      countries[index].capital = capital
    }

    res.status(200).send(countries[index])

  }catch (err){
    res.status(400).send({message: err.message})
  }
})

app.listen(3003, ()=>{
  console.log('Is running in http://localhost/3003')
})