import styled from "styled-components";
import React from 'react'
import Header from '../components/Header'

const Container = styled.div`
  width: 100%;
  height: 100%;
  div{
    width: min(900px, 90%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function AdminHomePage(){
  return(
    <Container>
      <Header></Header>
      <div>
        <CardTripContainer>
          <CardTripAdmin />
        </CardTripContainer>
      </div>
    </Container>
  )
}