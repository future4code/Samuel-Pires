import express, { Request, Response } from 'express'
import cors from 'cors'
enum userType {
  ADMIN = "admin",
  NORMAL = "normal"
}
type User = {
  id: number,
  name: string,
  email: string,
  type: userType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: userType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: userType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: userType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: userType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: userType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: userType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

//-----------------------EXERCÍCIO 1
app.get('/users', (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

//-----------------------EXERCÍCIO 2 E 3
app.get('/users/search', (req: Request, res: Response) => {
  const includes = (str1: string, str2: string): boolean => {
    return str1.toLowerCase().includes(str2.toLowerCase())
  }
  try {
    const type = req.query.type as string
    const name = req.query.name as string

    if(!name && !type){
      throw new Error('Por favor, indique pelo menos um query parâmetro')
    }
    if(type && !Object.values(userType).includes(type.toLowerCase() as userType)){
      throw new Error('Por favor, indique um tipo correto')
    }

    const result = users.filter((user)=>{
      if(name){
        if(!includes(user.name, name))return false
      }
      if(type){
        if(!includes(user.type, type))return false
      }
      return true
    })

    if(!result.length){
      throw new Error('Nenhum usuário foi encontrado')
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

//-----------------------EXERCÍCIO 4
app.post('/users', (req: Request, res: Response) => {
  try {
    const {name, email, type, age} = req.body
    if(!name || !email || !type || !age){
      throw new Error('Por favor, enviar body com name, email, type e age')
    }
    if(!Object.values(userType).includes(type.toLowerCase() as userType)){
      throw new Error('Por favor, indique um tipo correto')
    }
    if(users.findIndex(user=>user.email===email)>=0){
      throw new Error('E-mail já existente')
    }
    const id = Number(new Date())
    const newUser : User = {
      id, name, email, type, age
    }

    users.push(newUser)
    res.status(200).send(newUser)

  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
