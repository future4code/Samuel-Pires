/* INTERPRETAÇÃO DE CÓDIGO
  1) 10
    10 5

   2) 10 10 10 
*/

// ESCRITA DE CÓDIGO

//----------------- QUESTAO 1-------------------

let nome, idade;

console.log(typeof nome, typeof idade)

// Porque não há nada dentro das variáveis, sendo assim, elas não tem um tipo.

nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade?')

console.log('Olá ', nome, ' você tem ', idade, ' anos.')


//----------------- QUESTAO 2-------------------

console.log('Resposta: ', prompt('Nome da rua e número da casa:'))
console.log('Resposta: ', prompt('Seu estado e país:'))
console.log('Resposta: ', prompt('Sua cor favorita:'))
console.log('Resposta: ', prompt('Sua comida favorita:'))
console.log('Resposta: ', prompt('Sua música favorita:'))


//----------------- QUESTAO 3-------------------

let comidasPreferidas = ['churrasco', 'pizza', 'lasanha', 'carbonara', 'melancia'];
console.log('Essas são as minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


comidasPreferidas[1] = prompt('Qual sua comida preferida?')
console.log(comidasPreferidas)


//----------------- QUESTAO 4-------------------

let perguntas = ['Você é Brasileiro?', 'Você gosta de esportes?', 'Você fala inglês?']
let respostas = [true, true, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])