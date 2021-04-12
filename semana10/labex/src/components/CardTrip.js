import styled from "styled-components"
import React from 'react'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const P = styled.div`
  color: #708090;
  p{
    color: black;
    display: inline;
  }
`

export default function CardTrip(props){
  const {id, name, description, planet, duration, date} = props.trip
  return(
    <Container key={id}>
      <P>Nome: <p>{name}</p></P>
      <P>Planeta: <p>{planet}</p></P>
      <P>Duração: <p>{duration}</p></P>
      <P>Data: <p>{date}</p></P>
      <P>Descrição: <p>{description}</p></P>
    </Container>
  )
}