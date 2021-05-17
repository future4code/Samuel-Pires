//a) Através do process.argv[posicao_parametro]

//
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete 
anos você terá ${Number(process.argv[3])+7}.`)