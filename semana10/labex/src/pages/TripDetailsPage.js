import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import CardCandidates from '../components/CardCandidates'
import CardTrip from '../components/CardTrip'
import {ContainerStyled} from '../styledComponents'
import useProtectedPage from '../hooks/useProtectedPage'
import { baseUrl, headers } from '../parameters'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
`

export default function TripDetailsPage(){
  useProtectedPage()
  const {id} = useParams()
  const [trip, setTrip] = useState({})

  const getTripDetail = async()=>{
    const token = window.localStorage.getItem('token')
    try{
      const res = await axios.get(`${baseUrl}/trip/${id}`,{
        headers:{
          auth: token
        }
      })
      setTrip(res.data.trip)
      console.log('Trip', trip)
    }
    catch(err){
      console.log('erro ao pegar viagem específica', err)
    }
  }

  useEffect(()=>{
    getTripDetail()
  },[])

  console.log('trip aqui', trip)

  return(
    <Container>
      <Header />
      <CardTrip trip={trip}/>
      <CardCandidates candidates={trip.candidates} id={id}/>
    </Container>
  )
}