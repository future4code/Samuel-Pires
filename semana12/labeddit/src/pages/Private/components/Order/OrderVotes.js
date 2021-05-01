import React, {useContext} from 'react'
import {
  Container
} from "./styled";
import PrivateContext from "../../../Context/PrivateContext";
export default function OrderVotes(props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]

  console.log('value', value)

  return(
    <Container>

    </Container>
  )
}