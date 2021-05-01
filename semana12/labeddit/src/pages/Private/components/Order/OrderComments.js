import React, {useContext} from 'react'
import {
  Container
} from "./styled";
import PrivateContext from "../../../Context/PrivateContext";
import {orderMax, orderMin} from "./orderFunctions";

export default function OrderComments(props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]

  return(
    <Container>
      <button onClick={()=>orderMax(value,setValue, 'commentsCount')}>Comments Max</button>
      <button onClick={()=>orderMin(value,setValue, 'commentsCount')}>Comments Min</button>
    </Container>
  )
}