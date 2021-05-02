import React, {useContext, useState, useEffect} from 'react'
import {
  Container
} from "./styled";
import PrivateContext from "../../../Context/PrivateContext";
import {orderMax, orderMin} from "./orderFunctions";
import {MyArrowDownIcon, MyArrowUpIcon} from "./styledMaterial";
export default function OrderVotes(props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]
  const [order, setOrder] = useState(0);

  const Max = ()=>{
    setOrder(1)
    props.setOrder('OrderVotes')
    orderMax(value,setValue, 'votesCount')
  }
  const Min = ()=>{
    setOrder(-1)
    props.setOrder('OrderVotes')
    orderMin(value,setValue, 'votesCount')
  }

  useEffect(()=>{
    if(props.order!=='OrderVotes')setOrder(0)
  },[props.order])

  return(
    <Container>
      <MyArrowDownIcon onClick={Max} order={order}/>
      <MyArrowUpIcon onClick={Min} order={order}/>
      <p>Votes</p>
    </Container>
  )
}