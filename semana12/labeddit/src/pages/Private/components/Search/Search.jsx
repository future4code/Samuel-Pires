import React,{useContext, useState} from 'react'
import PrivateContext from "../../../Context/PrivateContext";
import {useInput} from "../../../../hooks/useInput";
import {
  Input,
  DivInput
} from "./styled";
import{
  MySearchIcon,
  MyCloseIcon
} from "./styledMaterial";

export default function ({idValue, idSetValue, width}){
  const {states, setters} = useContext(PrivateContext)
  const value = states[idValue]
  const setValue = setters[idSetValue]
  const [input, setInput] = useInput(()=>{
    if(input==='')removeFilter()
  })
  const [icon, setIcon] = useState(true);

  const filter=()=>{
    setIcon(false)
    setters.setLoading(true)
    let newValue = []
    value.forEach(v=>{
      if(v.username.toLowerCase().includes(input.toLowerCase())||
      v.text.toLowerCase().includes(input.toLowerCase())){
        newValue.push(v)
      }
    })
    setValue(newValue)
  }

  function removeFilter(){
    setInput('')
    setIcon(true)
    setters.setLoading(true)
    setValue(value)
  }

  const onKeyPress = (e)=>{
    if(e.key === 'Enter'){
      filter()
    }
  }

  return(
    <DivInput width={width}>
      <Input placeholder={'Search'} value={input} onChange={setInput} onKeyPress={onKeyPress}/>
      {icon? (
        <MySearchIcon onClick={filter}/>
      ):(
        <MyCloseIcon onClick={removeFilter}/>
      )
      }
    </DivInput>
  )
}