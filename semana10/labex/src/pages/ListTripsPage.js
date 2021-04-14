import React from 'react'
import Header from '../components/Header'
import {MiniLogo} from '../components/Logo'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'
import styled from 'styled-components'
import Container from '../components/Container'


export default function ListTripsPage(){
  return(
    <Container>
      {/* <Header>
          <MiniLogo></MiniLogo>
          <button>Voltar</button>
      </Header>
      <div>
        <Filter />
        <CardContainer>
          <CardTrip />
        </CardContainer>
      </div> */}
      <p>ListTripsPage</p>
    </Container>
  )
}