/* 1. O código recebe um número digitado pelo usuário e verifica
se o número é par ou ímpar. Imprimi 'passou no teste' se for par,
imprimi 'não passou no teste' se for ímpar.

   2a. Para mostrar o preço da fruta escolhida.
   2b. "O preço da fruta Maçã é R$ 2.25"
   2c. "O preço da fruta Pêra é R$ 5"

   3a. Recebendo algo digitado pelo usuário e convertendo para número.
   3b. Para nº10 -  mensagem is not defined
       Para nº-10 - mensagem is not defined
   3c. Sim, pois a variável 'mensagem' está definida apenas dentro do bloco if

*/


//EXERCÍCIO 4 ---------------------------------------
let idadeUsuario =  Number(prompt('Qual sua idade?'))

if(idadeUsuario>17)console.log('Você pode dirigir')
else console.log('Você não pode dirigir')


//EXERCÍCIO 5 ---------------------------------------
let turno = prompt('Qual o turno que você estuda? (M, V, N)')

if(turno==='M' || turno==='m')console.log('Bom dia!')
else if(turno==='V' || turno==='v')console.log('Boa tarde!')
else console.log('Boa noite!')


//EXERCÍCIO 6 ---------------------------------------
turno = prompt('Qual o turno que você estuda? (M, V, N)')

switch(turno){

   case 'M','m':
      console.log('Bom dia!')
   break;
   case 'V','v':
      console.log('Boa tarde!')
   break;
   default:
      console.log('Boa noite!')
   break;

}


//EXERCÍCIO 7 ---------------------------------------
let generoFilme = prompt('Qual gênero do filme?')
let valorIngreso = prompt('Valor do ingresso?')

if(generoFilme==="fantasia" && valorIngreso<15)console.log('Bom filme!')
else console.log('Escolha outro filme :(')