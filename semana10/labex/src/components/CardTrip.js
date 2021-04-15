import styled from "styled-components"
import React from 'react'

const Container = styled.div`
  width: 49%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 300px;
  box-shadow: 1px 1px 3px #003759;
  :hover{
    box-shadow: 1px 1px 10px #002134;
  }
  overflow: auto;
`

const P = styled.div`
  color: #708090;
  padding: 5px;
  p{
    color: black;
    /* display: inline; */
  }
`

export default function CardTrip(props){
  const {id, name, description, planet, duration, date} = props.trip
  return(
    <Container key={id}>
      <P>Nome <p>{name}</p></P>
      <P>Planeta <p>{planet}</p></P>
      <P>Duração <p>{duration}</p></P>
      <P>Data <p>{date}</p></P>
      <P>Descrição <p>{description}</p></P>
      
    </Container>
  )
}