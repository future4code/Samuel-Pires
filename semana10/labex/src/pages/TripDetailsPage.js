import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import CardCandidate from '../components/CardCandidate'
import CardTrip from '../components/CardTrip'
import Container from '../components/Container'
import useProtectedPage from '../hooks/useProtectedPage'
import { baseUrl, headers } from '../parameters'

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
  
  const decideCandidate = async(candidateId, approve)=>{
    const token = window.localStorage.getItem('token')
    const body = {approve: approve}
    try{
      await axios.put(`${baseUrl}/trips/${id}/candidates/${candidateId}/decide`, body, headers(token))
    }
    catch(err){
      console.log('erro ao decidir candidato', err)
    }
  }

  useEffect(()=>{
    getTripDetail()
  },[])

  return(
    <Container>
      {/* <CardTrip />
      <CardCandidate /> */}
      <p>TripDetailsPage</p>
    </Container>
  )
}