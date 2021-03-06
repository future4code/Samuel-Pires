//Exercício 1

function inverteArray(array) {
  const aux = []
  for(let i=array.length-1; i>=0; i--)
   aux.push(array[i])

  return aux
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const aux = []
   for(let i=0; i<array.length; i++){
      if(array[i]%2===0)
         aux.push(array[i]*array[i])
   }

   return aux
}

//Exercício 3

function retornaNumerosPares (array) {
   const aux = array.filter((item)=>{
      if(item%2===0)return true
      return false
   })

   return aux
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maior = array[0]
   for(let i=1; i<array.length; i++){
      if(maior < array[i])maior = array[i]
   }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const b1 = true, b2 = false, b3 = !b2, b4 = !b3

   return [b1 && b2 && !b4,
           (b1 && b2) || !b3,
           (b2 || b3) && (b4 || b1),
           !(b2 && b3) || !(b1 && b3),
           !(b1) && !(b3) || (!b4 && b3 && b3)
   ]
}

//Exercício 7

function retornaNNumerosPares(n) {
   let nPares =0, i =0
   const array = []
   
   while(nPares<n){
      if(i%2===0){
         array.push(i)
         nPares++
      }
      i++
   }

   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if(a===b && a===c){
     return "Equilátero"
  }
  else if(a!==b && a!==c && b!==c) {
     return "Escaleno"
  }
  else {
     return "Isósceles"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let objeto = {
      maiorNumero : "",
      maiorDivisivelporMenor : "",
      diferenca : ""
   }
   if(num1>=num2){
      objeto.maiorNumero = num1
      objeto.diferenca = num1 - num2
      if(num1%num2===0)objeto.maiorDivisivelporMenor = true
      else objeto.maiorDivisivelporMenor = false
   }
   else {
      objeto.maiorNumero = num2
      objeto.diferenca = num2 - num1
      if(num2%num1===0)objeto.maiorDivisivelporMenor = true
      else objeto.maiorDivisivelporMenor = false
   }

   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   for(let i=0; i<array.length; i++){
      for(let j=i+1; j<array.length; j++){
         if(array[j]<array[i]){
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
         }
      }
   }
   return [array[array.length-2], array[1]]
}

//Exercício 11

function ordenaArray(array) {
   for(let i=0; i<array.length; i++){
      for(let j=i+1; j<array.length; j++){
         if(array[j]<array[i]){
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
         }
      }
   }
   return array
}

// Exercício 12

function filmeFavorito() {
   const objeto = {
      nome : "O Diabo Veste Prada",
      ano : 2006,
      diretor : "David Frankel",
      atores : ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return objeto
}

// Exercício 13

function imprimeChamada() {
   const objeto = {
      nome : "O Diabo Veste Prada",
      ano : 2006,
      diretor : "David Frankel",
      atores : ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura : lado1,
      altura : lado2,
      perimetro : 2*(lado1+lado2),
      area : lado1*lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome : "ANÔNIMO"
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   return aux = arrayDePessoas.filter((pessoa)=>{
      if(pessoa.idade>=20)return true
      return false
   })
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   return  arrayDePessoas.filter((pessoa)=>{
      if(pessoa.idade<20)return true
      return false
   })
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const aux = []
   array.forEach((elemento) => {
      aux.push(elemento*2)
   })
   return aux
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  const aux = []
  array.forEach((elemento)=>{
     aux.push((elemento*2).toString())
  })
  return aux
}

// Exercício 17, letra C

function verificaParidade(array) {
   const aux = []
   array.forEach((elemento)=>{
      if(elemento%2===0)aux.push(elemento.toString()+" é par")
      else aux.push(elemento.toString()+" é ímpar")
   })
   return aux
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   return pessoas.filter((pessoa)=>{
      if((pessoa.altura>=1.5) && pessoa.idade>14 && pessoa.idade<60) return true
      else return false
   })
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   return pessoas.filter((pessoa)=>{
      if((pessoa.altura<1.5) || pessoa.idade<=14 || pessoa.idade>=60) return true
      else return false
   })
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
  const aux = []
  const aux1 = []
  const msg = []
  consultas.forEach((item, index)=>{
     if(item.genero==="masculino"){
        aux.push("Sr.")
        aux1.push("lembrá-lo")
     }
     else{
         aux.push("Sra.")
         aux1.push("lembrá-la")
     }
     if(item.cancelada){
         msg.push(`Olá, ${aux[index]} ${item.nome}. Infelizmente sua consulta marcada para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
     }
     else{
        msg.push(`Olá, ${aux[index]} ${item.nome}. Estamos enviando esta mensagem para ${aux1[index]} da sua consulta no dia ${item.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`)
     }
  })
  return msg
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  contas.forEach((conta)=>{
     conta.compras.forEach((compra)=>{
        conta.saldoTotal-=compra
     })
  })
  return contas
}