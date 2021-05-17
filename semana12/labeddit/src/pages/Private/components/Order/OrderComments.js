import React, {useContext, useState, useEffect} from 'react'
import {
  Container,
  Button
} from "./styled";
import {
  MyArrowDownIcon,
  MyArrowUpIcon
} from "./styledMaterial";
import PrivateContext from "../../../Context/PrivateContext";
import {orderMax, orderMin} from "./orderFunctions";

export default function OrderComments(props){
  const {states, setters} = useContext(PrivateContext)
  const value = states[props.value]
  const setValue = setters[props.setValue]
  const [order, setOrder] = useState(0);

  const Max = ()=>{
    setOrder(1)
    props.setOrder('OrderComments')
    orderMax(value,setValue, 'commentsCount')
  }
  const Min = ()=>{
    setOrder(-1)
    props.setOrder('OrderComments')
    orderMin(value,setValue, 'commentsCount')
  }

  useEffect(()=>{
    if(props.order!=='OrderComments')setOrder(0)
  },[props.order])

  return(
    <Container>
      <MyArrowDownIcon onClick={Max} order={order}/>
      <MyArrowUpIcon onClick={Min} order={order}/>
      <p>Comments</p>
    </Container>
  )
}