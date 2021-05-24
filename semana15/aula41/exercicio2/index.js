if(process.argv.length!==5) {
  console.log('Esperava receber 3 argumentos e recebi', process.argv.length - 2)
  process.exit()
}
const oper = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])


const result = (r) => {
  console.log('Resposta:', r)
}

const calc = {
  add: (a, b) => result(a + b),
  sub: (a, b) => result(a - b),
  mult: (a, b) => result(a * b),
  div: (a, b) => result(a / b),
}

if(calc[oper])calc[oper](n1,n2)
else console.log('Por favor reveja o seu argumento de operador')


