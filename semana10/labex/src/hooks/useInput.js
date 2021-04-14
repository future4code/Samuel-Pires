import {useState} from 'react'

export function useInput(){
  const [value, setValue] = useState('')

  const handleInput=(e)=>{
    if(e && e.target && e.target.value)setValue(e.target.value)
    else setValue('')
  }

  return [value, handleInput]
}