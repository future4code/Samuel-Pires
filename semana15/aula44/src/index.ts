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

app.get('/users/search', (req: Request, res: Response) => {
  try {
    const type = req.query.type as string
    if(!Object.values(userType).includes(type.toLowerCase() as userType)){
      throw new Error('Por favor, indique um tipo correto')
    }

    const result = users.filter(user=>user.type===type.toLowerCase())

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
