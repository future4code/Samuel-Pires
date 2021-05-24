//a Erro já que a o tipo string não aceita number
//b
let meuNumero : number | string

//c
enum COR_FAVORITA {
  VERMELHO = 'Vermelho',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  ANIL = 'Anil',
  VIOLETA = 'Violeta'
}

type pessoa = {
  nome : string,
  idade : number,
  corFavorita: COR_FAVORITA
}

const astrodev : pessoa={
  nome : 'Astrodev',
  idade : 30,
  corFavorita: COR_FAVORITA.LARANJA
}
const pessoaA : pessoa={
  nome : 'pessoaA',
  idade : 20,
  corFavorita: COR_FAVORITA.AZUL
}
const pessoaB : pessoa={
  nome : 'pessoaB',
  idade : 40,
  corFavorita: COR_FAVORITA.VERDE
}

console.table(pessoaA)