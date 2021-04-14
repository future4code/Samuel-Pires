import React from 'react'
import Header from '../components/Header'
import {MiniLogo} from '../styledComponents'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'
import styled from 'styled-components'
import {ContainerStyled} from '../styledComponents'

export default function ListTripsPage(){
  return(
    <ContainerStyled>
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
    </ContainerStyled>
  )
}