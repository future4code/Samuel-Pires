const compress = (input : string)=> {
  let result : string = ''
  let aux: string = input[0]
  let cont: number = 1

  for (let i = 1; i < input.length; i++) {
    if (aux !== input[i]) {
      result+=aux + String(cont)
      aux = input[i]
      cont = 1
    } else {
      cont++
    }
  }
  result+=aux + String(cont)
  if(result.length<input.length)return result
  return input
}

const input = process.argv[2]
console.log(compress(input))