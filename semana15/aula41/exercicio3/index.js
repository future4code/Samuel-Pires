const list = ['projeto labenu', 'instalar app']

if(process.argv.length<3){
  console.log('Esperava receber pelo menos 1 argumento')
  process.exit()
}

for(let i=2; i<process.argv.length; i++){
  list.push(process.argv[i])
}

console.log('tarefas:', list)