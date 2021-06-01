#EXERCÍCIO 1

<p>a. Chave que faz referência a uma outra tabela</p>
<p>b. insert into Rating_aula48(id, comment, rate, filme_id)</p>
<p>c. Error code: 1452.<br>
Esse erro aconteceu pois não conseguiu encontrar na tabela de filmes id informada.
</p>
<p>alter table Filmes_aula45 drop column avaliacao;</p>
<p>e. Error code: 1451.<br>
Esse erro aconteceu pois este filme está referenciado em outra tabela.
</p>

#EXERCÍCIO 2

<p>a. Essa tabela é responsável por fazer referência a outras duas tabelas, criando assim a possibilidade de relação N:M.</p>
<p>b. insert into Elenco_Filme_aula48(filme_id,actor_id) values</p>
<p>c. Error Code: 1452. Não é possível pois é uma referência inválida.</p>
<p>d. Error Code: 1451. Não é possível pois este ator está referenciado em outra tabela.</p>

#EXERCÍCIO 3

<p>a. A query é responsável trazer como resposta a união de duas tabelas. O uso do on é para estabelecer uma condição para que a união das linhas da tabela
se deem apenas com os 'ids' que forem iguais.</p>
<p>b. select Filmes_aula45.nome, Filmes_aula45.id, Rating_aula48.rate from Rating_aula48
join Filmes_aula45 on Filmes_aula45.id = Rating_aula48.filme_id;</p>