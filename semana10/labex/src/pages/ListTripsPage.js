import React from 'react'
import Header from '../components/Header'
import {MiniLogo} from '../styledComponents'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'
import styled from 'styled-components'
import {ContainerStyled} from '../styledComponents'

const Container = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  >div{
    align-self: center;
    width: 100%;
  }
`

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
      <Header />
      <div>
        <Filter />
      </div>
    </Container>
  )
}