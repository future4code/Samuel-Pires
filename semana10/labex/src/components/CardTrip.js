import styled from "styled-components"
import React from 'react'
import {Link} from 'react-router-dom'
const ContainerAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  margin-bottom: 10px;
  height: 300px;
  max-height: 500px;
  box-shadow: 1px 1px 3px #003759;
  :hover{
    box-shadow: 1px 1px 10px #002134;
  }
  overflow: auto;
  a{
    text-decoration: none;
  }
`

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
`

const P = styled.div`
  color: #708090;
  padding: 5px;
  p{
    color: black;
    /* display: inline; */
  }
`

const Svg = styled.svg`
  width: 50px;
  padding: 10px;
  margin-right: 10px;
  fill: currentColor;
  color: #005288;
  transition: all 0.3s;
  :hover{
    border-radius: 25px;
    background-color: #a7a9ac;
    color: #002134;
    transform: scale(1.3);
  }
`

export default function CardTrip(props){
  const {id, name, description, planet, durationInDays, date} = props.trip
  return(
    <ContainerAll>
      <Link to={`/admin/trips/${id}`}>
        <Container key={id}>
          <P>Nome <p>{name}</p></P>
          <P>Planeta <p>{planet}</p></P>
          <P>Duração <p>{durationInDays} dias</p></P>
          <P>Data <p>{date}</p></P>
          <P>Descrição <p>{description}</p></P>
        </Container>
      </Link>
      {props.del &&
        <Svg onClick={()=>props.deleteTrip(id)} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </Svg>
      }
    </ContainerAll>
  )
}