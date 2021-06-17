export default function validateInput(input : {}) : void {
  let message= 'Você precisar inserir os seguintes campos: '
  const keys = Object.keys(input)
  for(const k of keys){
    //@ts-ignore
    if(!input[k] || input[k].length===0){
      message+=`'${k}' `
    }
  }
  if(message.length>43){
    throw new Error(message)
  }
}