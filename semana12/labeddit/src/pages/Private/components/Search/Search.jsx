import React,{useContext} from 'react'
import PrivateContext from "../../../Context/PrivateContext";
import {useInput} from "../../../../hooks/useInput";
import {
  Input,
  DivInput
} from "./styled";
import{
  MySearchIcon
} from "./styledMaterial";

export default function (props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]
  const [input, setInput] = useInput()

  function filter(){
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

  const onKeyPress = (e)=>{
    if(e.key === 'Enter'){
      filter()
    }
  }

  return(
    <DivInput width={props.width}>
      <Input placeholder={'Search'} value={input} onChange={setInput} onKeyPress={onKeyPress}/>
      <MySearchIcon onClick={filter}/>
    </DivInput>
  )
}