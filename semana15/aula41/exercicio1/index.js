//a) Através do process.argv[posicao_parametro]

if(process.argv.length!==4){
  console.log('Esperava receber 2 argumentos e recebi', process.argv.length-2)
  process.exit()
}

//b
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

//c
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3])+7}.`)