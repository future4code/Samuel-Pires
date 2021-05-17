const oper = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

const result = (r)=>{
  console.log('Resposta:', r)
}

const calc = {
  add: (a,b)=>result(a+b),
  sub: (a,b)=>result(a-b),
  mult: (a,b)=>result(a*b),
  div: (a,b)=>result(a/b)
}

calc[oper](n1,n2)

