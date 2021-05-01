export const orderMax=(value,setValue, id)=>{
  const newValue = [...value]
  newValue.sort((a,b)=>{
    if(a[id] < b[id]){
      return 1
    }
    else{
      return -1
    }
  })
  setValue(newValue)
}

export const orderMin=(value,setValue, id)=>{
  const newValue = [...value]
  newValue.sort((a,b)=>{
    if(a[id] > b[id]){
      return 1
    }
    else{
      return -1
    }
  })
}