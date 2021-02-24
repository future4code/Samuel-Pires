/*
  1. a. false
     b. false
     c. true
     d. boolean
  
  2. a. undefinid
     b. null
     c. 11
     d. 3
     e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
     f. 10

*/

// EXERCICIO 1 --------------------------------

const idadeUsuario = Number(prompt('Qual sua idade?'))
const idadeAmigo = Number(prompt('Qual idade do seu melhor amigo?'))

console.log('Sua idade é maior do que a do seu melhor amigo? ', idadeUsuario > idadeAmigo)
console.log(idadeUsuario - idadeAmigo)


// EXERCICIO 2 --------------------------------

const numero_par = Number(prompt('Digite um número par'))
console.log(numero_par%2)
// Resto da divisão com número par por 2 sempre da 0.
// Resto da divisão com número ímpar por 2 sempre da 1.


// EXERCICIO 3 --------------------------------

let listaDeTarefas = []

listaDeTarefas.push(prompt('Tarefa que você precisar realizar no dia:'))
listaDeTarefas.push(prompt('Tarefa que você precisar realizar no dia:'))
listaDeTarefas.push(prompt('Tarefa que você precisar realizar no dia:'))

console.log(listaDeTarefas)

listaDeTarefas.splice(Number(prompt('Qual índice da tarefa que você já realizou?')),1)

console.log(listaDeTarefas)


// EXEERCICIO 4 -------------------------------

const nomeUsuario = prompt('Digite seu nome')
let emailUsuario = prompt('Digite seu email')

console.log('O e-mail', emailUsuario, 'foi cadastrado com sucesso. Seja bem vindo(a),', nomeUsuario + '!')


// DESAFIOS -----------------------------------
// EXERCICIO 1 --------------------------------

let a_1 = (77-32)*5/9 +273.5;
let b_1 = (80)*9/5 +32;
let c_1 = (30)*9/5 +32;
let c_1_2 = (c_1-32)*5/9 +273.5;

console.log(a_1,'K')
console.log(b_1, 'ºF')
console.log(c_1, 'ºF e', c_1_2, 'K')

let numeroInserido = Number(prompt('Digite um valor em graus Celsius'))*9/5 + 32;
let numeroInseridoK = (numeroInserido-32)*5/9 +273.5;

console.log(numeroInserido, 'ºF e', numeroInseridoK, 'K')


// EXERCICIO 2 --------------------------------

console.log('R$' + 280*0.05, 'hora')
console.log('R$'+(280*0.05-Number(prompt('Qual a % de desconto?'))/100*280*0.05), 'hora')


// EXERCICIO 3 --------------------------------

console.log('20lb equivalem a', 20/2.205, 'kg')
console.log('10.5oz equivalem a', 10.5/35.274, 'kg')
console.log('100mi equivalem a', 100*1609, 'm')
console.log('50ft equivalem a', 50/3.281, 'm')
console.log('103.56gal equivalem a', 103.56*3.785, 'l')
console.log('450 xic equivalem a', 450*6/25, 'l')

let valorInserido = prompt('Digite o valor em mi')
console.log(valorInserido + 'mi equivalem a', Number(valorInserido)*1609, 'm')