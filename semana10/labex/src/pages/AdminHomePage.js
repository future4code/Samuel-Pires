import styled from "styled-components";
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'

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