function validate_date(date: Date) : (boolean){
  const today = new Date()
  console.log(date, today)
  if(date.getFullYear()>today.getFullYear())return true
  else if(date.getFullYear()<today.getFullYear())return false

  if(date.getMonth()>today.getMonth())return true
  else if(date.getMonth()<today.getMonth())return false

  return date.getDate()+1>=today.getDate()
}

export function convert_date(date : string) : (string | boolean){
  if(date.length!==10 ||
    date[2]!=='/' ||
    date[5]!=='/'
  ){
    return false
  }

  const [dd,mm,aaaa] = date.split('/')
  const newDate = aaaa+'-'+mm+'-'+dd
  const data = new Date(newDate)

  if(!data.getFullYear()){
    return false
  }
  return validate_date(data) ? newDate : false
}