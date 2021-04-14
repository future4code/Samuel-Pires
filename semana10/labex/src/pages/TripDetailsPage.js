import React from 'react'
import CardCandidate from '../components/CardCandidate'
import CardTrip from '../components/CardTrip'
import Container from '../components/Container'
import useProtectedPage from '../hooks/useProtectedPage'

export default function TripDetailsPage(){
  useProtectedPage()
  return(
    <Container>
      {/* <CardTrip />
      <CardCandidate /> */}
      <p>TripDetailsPage</p>
    </Container>
  )
}