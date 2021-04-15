import {useState} from 'react'

export default function useForm(initialForm){
  const [form, setForm] = useState(initialForm)

  const onChange =(e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  return [form, onChange]
}