import {Request, Response} from "express";
import app from "./app";
import {validate_email} from "./functions/validate_email";
import {Status, Task, Task_responsible, User} from "./enum_type";
import {connection} from "./connection";
import {convert_date} from "./functions/date";


app.get('/ping', (req: Request, res: Response) => {
  try {
    res.status(201).send('pong')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/user?', async(req: Request, res: Response) => {
  try {
    const {query} = req.query
    if(!query){
      throw new Error('Necessário query.')
    }

    const users = await connection('Users_projeto16')
      .select('id', 'nickname')
      .where('nickname','like',`%${query}%`)
      .orWhere('email', 'like', `%${query}%`)

    res.status(200).send({users})

  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/user/all', async(req: Request, res: Response) => {
  try {
    const users = await connection('Users_projeto16').select('id','nickname')
    res.status(200).send({users})
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/user/:id', async(req: Request, res: Response) => {
  try {
    const {id} = req.params
    if(!id){
      throw new Error('Por favor preencha o id.')
    }

    const result = await connection('Users_projeto16').select('id','nickname').where('id', id)
    if(result.length===0){
      throw new Error('Não existe usuário com este id.')
    }
    res.status(200).send(result[0])
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/user', async (req: Request, res: Response) => {
  try {
    const {name, nickname, email} = req.body

    if(!name || !nickname || !email){
      throw new Error('Todos os campos devem ser preenchidos.')
    }
    if(typeof name!='string' || typeof nickname!='string' || typeof email!='string'){
      throw new Error('Todos os campos devem ser do tipo string.')
    }
    if(!validate_email(email)) {
      throw new Error('Email inválido.')
    }

    const user : User = {
      id : Date.now().toString(),
      name, nickname, email
    }

    await connection('Users_projeto16').insert(user)

    res.status(200).send('Created!')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.post('/user/edit/:id', async(req: Request, res: Response) => {
  try {
    const {name, nickname} = req.body
    const {id} = req.params
    if(!name && !nickname) {
      throw new Error('Pelo menos um dos campos preenchidos: name ou nickname')
    }
    if(typeof name==='string' && !name){
      throw new Error('Você enviou o campo "name" mas não o preencheu.')
    }
    if(typeof nickname==='string' && !nickname){
      throw new Error('Você enviou o campo "nickname" mas não o preencheu.')
    }

    await connection('Users_projeto16').update({name,nickname}).where('id', id)

    res.status(200).send('Usuário alterado.')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})


app.get('/task?', async(req: Request, res: Response) => {
  try {
    const {creatorUserId : creator_id} = req.query
    if(!creator_id){
      throw new Error('Necessário creatorUserId.')
    }
    const tasks = await connection('Tasks_projeto16').select(
      'Tasks_projeto16.id as taskId',
      'title',
      'description',
      'date_limit as limitDate',
      'creator_id as creatorUserId',
      'status',
      'Users_projeto16.nickname as creatorUserNickname'
    ).join('Users_projeto16', 'creator_id', 'Users_projeto16.id')

    res.status(200).send({tasks})
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.get('/task/:id', async(req: Request, res: Response) => {
  try {
    const {id} = req.params
    if(!id){
      throw new Error('Informe id.')
    }

    const result = await connection('Tasks_projeto16')
      .select('Tasks_projeto16.id as taskId',
        'title',
        'description',
        'date_limit as limitDate',
        'status',
        'creator_id as creatorUserId',
        'Users_projeto16.nickname as creatorUserNickname')
      .join('Users_projeto16', 'Users_projeto16.id', 'Tasks_projeto16.creator_id')

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

app.put('/task', async(req: Request, res: Response) => {
  try {
    const {title, description, limitDate, creatorUserId} = req.body
    console.table(req.body)
    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error('Por favor preencha todos os campos.')
    }

    const newDate = convert_date(limitDate)
    if(!newDate){
      throw new Error('Data inválida. Formato aceito: dd/mm/aaaa - Apenas data presente ou futura.')
    }

    const task : Task = {
      id : Date.now().toString(),
      creator_id : creatorUserId,
      description,
      title,
      status : Status.TO_DO,
      date_limit : newDate as string
    }

    await connection('Tasks_projeto16').insert(task)

    res.status(201).send('Task created!')
  } catch (err) {
    if(err.message.includes('a foreign key constraint fails')){
      err.message = 'Usuário não encontrado.'
    }
    res.status(400).send({message: err.message})
  }
})

app.post('/task/responsible', async(req: Request, res: Response) => {
  try {
    const {task_id, responsible_user_id: responsible_id} = req.body
    if(!task_id || !responsible_id){
      throw new Error('Preencher todos os campos.')
    }

    const task_responsible : Task_responsible = {
      task_id, responsible_id
    }
    
    await connection('Tasks_responsible_projeto16').insert(task_responsible)

    res.status(201).send('Created!')
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

