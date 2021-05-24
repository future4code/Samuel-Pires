function obterEstatisticas(numeros : number[]) : {}{

  const numerosOrdenados = numeros.sort(
    (a, b) => a - b
  )

  let soma : number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas : {maior:number, menor:number, media:number} = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

type amostra = {
  numeros : number[],
  obterEst : (numeros: number[]) => {}
}

const amostraNum : amostra = {
  numeros: [10,20,30,50,21,45],
  obterEst: obterEstatisticas
}

console.table(amostraNum.obterEst(amostraNum.numeros))