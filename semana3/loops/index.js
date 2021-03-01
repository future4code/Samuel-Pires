/*
   1. O código está somando valor + i e guardando na variável valor.
      Impresso no console -> 10

   2a. Será impresso no console os números da lista que são maiores que 18.
   2b. Não.

*/


//EXERCÍCIO 3 ----------------------------------
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.
console.log('EXERCÍCIO A')
for(let i=0; i<array.length; i++){
   console.log(array[i])
}

//b.
console.log('EXERCÍCIO B')
for(let i=0; i<array.length; i++){
   console.log(array[i]/10)
}

//c.
console.log('EXERCÍCIO C')
let arrayPares = []
for(let i=0; i<array.length; i++){
   if(array[i]%2===0)arrayPares.push(array[i])
}
console.log(arrayPares)

//d.
console.log('EXERCÍCIO D')
for(let i=0; i<array.length; i++){
   console.log('O elemento do índex', i, 'é', array[i])
}

//e.
console.log('EXERCÍCIO E')
let maiorValor = array[0]
let menorValor = array[0]

for(let i=1; i<array.length; i++){
   if(maiorValor<array[i])maiorValor = array[i]
   else if(menorValor>array[i])menorValor = array[i]
}
console.log('O maior valor é', maiorValor, 'e o menor valor é', menorValor)