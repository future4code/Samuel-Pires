import React, {useContext} from 'react'
import {
  Container
} from "./styled";
import PrivateContext from "../../../Context/PrivateContext";
import {orderMax, orderMin} from "./orderFunctions";
export default function OrderVotes(props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]

  console.log('value', value)

  return(
    <Container>
      <button onClick={()=>orderMax(value,setValue, 'votesCount')}>Votes Max</button>
      <button onClick={()=>orderMin(value,setValue, 'votesCount')}>Votes Min</button>
    </Container>
  )
}