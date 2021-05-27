#EXERCÍCIO 1

<p>a. A resposta vem como um array contendo dois arrays, no primeiro, os nossos dados, no segundo algumas outras informações que o sql nos dá.</p>

<p>b. const {name} = req.query <br>
const [result] = await connection.raw(`
      select * from Actor_aula45 where name='${name}'
    `)</p>

<p>c. select count(*) as qtd,gender from Actor_aula45 as genero where gender='${gender}'</p>

#EXERCÍCIO 2

<p>a.await connection('Actor_aula45').update({salary}).where('id', id)</p>
<p>b.await connection('Actor_aula45').delete().where('id', id)</p>
<p>c.const result = await connection('Actor_aula45').avg('salary as media').where({gender})</p>

#EXERCÍCIO 3

<p>a.<br>app.get('/actors/:id', async(req: Request, res: Response) => {<br>
  try {<br>
    const id = req.params.id
    const result = await connection('Actor_aula45').where('id',id)
    res.status(200).send(result[0])<br>
  } catch (err) {<br>
    res.status(400).send({message: err.message})
  }<br>
})</p>

<p>b.<br>app.get('/actors/search?', async (req: Request, res: Response) => {<br>
  try {<br>
    const {name,gender} = req.query
    let result
    if(name){
      result = await connection.raw(`
        select * from Actor_aula45 where name='${name}'
      `)
    }
    else{
      result = await connection.raw(`
        select count(*) as qtd,gender from Actor_aula45 as genero where gender='${gender}'
      `)
    }
<br>
    res.status(200).send(result[0])
} catch (err) {
res.status(400).send({message: err.message})
}
})</p>

