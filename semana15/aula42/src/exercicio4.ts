type pokemon ={
  name: string,
  types: string,
  healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) tsc exercicio4.ts
//b) Poderia apenas utilizar o comando tsc - desde que tivesse tsconfig.json corretamente configurado
//c) Sim, com comando tsc