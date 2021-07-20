const oneEdit = (a : string, b : string)=>{
  if(Math.abs(a.length - b.length)>1)return false

  if(a.length>b.length)return a.includes(b)
  else if(b.length>a.length)return b.includes(a)

  let diff = 0
  for(let i =0; i<a.length; i++){
    if(a[i]!==b[i])diff++
  }
  return diff === 1
}

const a = process.argv[2]
const b = process.argv[3]

console.log(oneEdit(a,b))
