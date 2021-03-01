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


//DESAFIO --------------------------------------------------------------------
console.log('DESAFIO --------------------------')

//EXERCÍCIO 1 --------------------------------
//1
console.log('EXERCÍCIO 1 --------------------------')
const imprimi = (parametro) => {
   console.log(parametro)
}
console.log("1.1")
imprimi('Olá mundo!')

//2
const somaSemRetorno = (a,b) =>{
   imprimi(a+b)
}
console.log("1.2")
somaSemRetorno(10,2)

//EXERCÍCIO 2 --------------------------------
console.log('EXERCÍCIO 2 ---------------------------')
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//2a
console.log('2a.')
function paresX2(array){
   let pares = []
   for(let i=0; i<array.length; i++)
      parOuNao(array[i]) ? pares.push(array[i]*2) : false
   
   return pares
}
console.log("Pares:", paresX2(numeros))

//2b
console.log('2b.')
function maiorNumeroArray(array){
   let maior = array[0]
   for(let i=1; i<array.length; i++)
      maior<array[i] ? maior=array[i] : false
   
   return maior
}
console.log("Maior:", maiorNumeroArray(numeros))

//2c
console.log('2c.')
function maiorNumeroArrayIndice(array){
   let indice = 0;
   for(let i=1; i<array.length; i++)
      array[indice] < array[i] ? indice=i : false
   
   return indice
}
console.log("Indice:", maiorNumeroArrayIndice(numeros))

//2d
console.log('2d.')
function arrayInverter(array){
   let arrayInvertido = []
   for(let i=array.length-1; i>=0; i--)
      arrayInvertido.push(array[i])

   return arrayInvertido
}
console.log("Array invertido:", arrayInverter(numeros))