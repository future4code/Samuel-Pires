if(process.argv.length<3){
  console.log('Esperava receber pelo menos 1 argumento')
  process.exit()
}

let fs = require('fs')
const list = JSON.parse(fs.readFileSync('lista.txt').toString())

for(let i=2; i<process.argv.length; i++){
  list.push(process.argv[i])
}

console.log('list', list)

fs.writeFile('lista.txt', JSON.stringify(list), function (err, file){
  if(err) throw err
})