export function analise_date(birth_date:string): Date | undefined{
  const date = new Date(birth_date+'T00:00:00')
  if(isNaN(date.getFullYear())){
    return undefined
  }
  return date
}

export function analise_18(date: Date):boolean{
  const dateNow = new Date()

  const idade = dateNow.getFullYear()-date.getFullYear()
  if(idade>18)return true
  if(idade<18)return false
  if(date.getMonth()>dateNow.getMonth())return false
  if(date.getMonth()===dateNow.getMonth() &&
    date.getDate()>dateNow.getDate())return false

  return true
}

export function analise_Today(date:Date):boolean{
  const dateNow = new Date()

  if(dateNow.getFullYear()<date.getFullYear())return true
  else if(dateNow.getFullYear()>date.getFullYear())return false

  if(dateNow.getMonth()<date.getMonth())return true
  else if(dateNow.getMonth()>date.getMonth())return false

  if(dateNow.getDate()<=date.getDate())return true
  else return false
}