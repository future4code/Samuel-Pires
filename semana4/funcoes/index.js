/*
   1a. 10
       50
   1b. Ele entraria na função, realizaria os cálculos, porém não seria impresso
   nem armazenado nada. No console não apareceria nada.

   2a. Darvas
       Caio
   2b. Amanda
       Caio

   3. O código eleva ao quadrado os números que são pares.
      ParAoQuadrado()
*/

//EXERCÍCIO 4 ---------------------------
//a)
console.log("EXERCÍCIO 4 -------------------------")
function infoSobreMim(){
   console.log('Eu sou Samuel, tenho 21 anos, moro em SC e estudo na Labenu')
}
infoSobreMim()

//b
function infoPessoa(nome, idade, cidade, estudante){
   let est = estudante ? "sou" : "não sou"
   return "Eu sou "+nome+", tenho "+idade+" anos, "+"moro em "+cidade+" e "+est+" estudante."
}

console.log(infoPessoa("Vitoria", 21, "Ararangua", true))


//EXERCÍCIO 5 ---------------------------
console.log("EXERCÍCIO 5 -------------------------")
//a)
function soma(a,b){
   return a+b;
}
console.log("Soma:",soma(2,3))

//b)
function maiorMenor(a,b){
   return a>=b ? true : false
}
console.log("Maior igual ou Menor:", maiorMenor(3,5))

//c)
function imprimi10x(mensagem){
   for(let i=0; i<10; i++)console.log(mensagem)
}
console.log("Imprimi 10x:")
imprimi10x("Olá")

//EXERCÍCIO 6 ---------------------------
console.log("EXERCÍCIO 6 -------------------------")
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a)
function tamanhoArray(array){
   return array.length
}
console.log("Tamanho array:", tamanhoArray(array))

//b)
function parOuNao(a){
   return a%2===0 ? true : false
}
console.log("5 é par ou não:", parOuNao(5))

//c)
function quantidaDePares(array){
   let k=0
   for(let i=0; i<array.length; i++)
      array[i]%2===0 ? k++ : false

   return k
}
console.log("Quantidade de pares:", quantidaDePares(array))

//d)
function quantidadeParesOtimizada(array){
   let k=0
   for(let i=0; i<array.length; i++)
      parOuNao(array[i]) ? k++ : false
   
   return k
}
console.log("Quantidade de pares otimizada:", quantidadeParesOtimizada(array))
