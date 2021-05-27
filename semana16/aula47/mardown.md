#EXERCÍCIO 1

<p>a. A resposta vem como um array contendo dois arrays, no primeiro, os nossos dados, no segundo algumas outras informações que o sql nos dá.</p>

<p>b. const {name} = req.query <br>
const [result] = await connection.raw(`
      select * from Actor_aula45 where name='${name}'
    `)</p>

<p>c. select count(*) as qtd,gender from Actor_aula45 as genero where gender='${gender}'</p>

#EXERCÍCIO 2

<p></p>