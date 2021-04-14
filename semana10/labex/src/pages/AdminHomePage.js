import styled from "styled-components";
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import useProtectedPage from "../hooks/useProtectedPage";

export default function AdminHomePage(){
  useProtectedPage()
  return(
    <Container>
      {/* <Header></Header>
      <div>
        <CardTripContainer>
          <CardTripAdmin />
        </CardTripContainer>
      </div> */}
      <p>AdminHomePage</p>
    </Container>
  )
}