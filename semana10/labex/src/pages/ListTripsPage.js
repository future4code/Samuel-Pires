import React from 'react'
import Header from '../components/Header'
import {MiniLogo} from '../components/Logo'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'
import styled from 'styled-components'

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

export default function ListTripsPage(){
  return(
    <Container>
      <div>
        <Header>
          <MiniLogo></MiniLogo>
          <button>Voltar</button>
        </Header>
        <Filter />
        <CardContainer>
          <CardTrip />
        </CardContainer>
      </div>
    </Container>
  )
}