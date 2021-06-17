export function date_string(date : string | number | Date):string | undefined{
  const data = new Date(date)
  if(!data.getFullYear())return undefined
  return (
    data.getFullYear().toString() + '-' +
    data.getMonth().toString() + '-' +
    data.getDate().toString()
  )
}