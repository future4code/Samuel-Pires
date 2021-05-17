const list = ['projeto labenu', 'instalar app']

for(let i=2; i<process.argv.length; i++){
  list.push(process.argv[i])
}

console.log('tarefas:', list)