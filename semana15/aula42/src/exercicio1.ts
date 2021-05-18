//a Erro já que a o tipo string não aceita number
//b
let meuNumero : number | string

//c
type pessoa = {
  nome : string,
  idade : number,
  corFavorita: string
}

const astrodev : pessoa={
  nome : 'Astrodev',
  idade : 30,
  corFavorita: 'Laranja'
}
const pessoaA : pessoa={
  nome : 'pessoaA',
  idade : 20,
  corFavorita: 'Azul'
}
const pessoaB : pessoa={
  nome : 'pessoaB',
  idade : 40,
  corFavorita: 'Verde'
}