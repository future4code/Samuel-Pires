import React from 'react'
import Header from '../components/Header'
import {MiniLogo} from '../components/Logo'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'

export default function ListTripsPage(){
  return(
    <Container>
      <Header>
        <MiniLogo></MiniLogo>
        <button>Voltar</button>
      </Header>
      <Filter />
      <CardContainer>
        <CardTrip />
      </CardContainer>
    </Container>
  )
}