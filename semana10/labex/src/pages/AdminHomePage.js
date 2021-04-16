import styled from "styled-components";
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {ContainerStyled} from '../components/styledComponents'
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import { baseUrl, headers } from "../parameters";
import { useParams } from "react-router-dom";
import CardTrip from "../components/CardTrip";

const Container = styled(ContainerStyled)`
  display:flex;
  flex-direction: column;
`

const Cards = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
`

export default function AdminHomePage(){
  useProtectedPage()

  const [trips, setTrips] = useState([])

  const getTrips = async()=>{
    try{
      const res = await axios.get(`${baseUrl}/trips`)
      setTrips(res.data.trips)
    }
    catch(err){
      console.log('erro ao obter viagens getTrips', err)
    }
  }

  useEffect(()=>{
    getTrips()
  },[])


  const deleteTrip = async(id)=>{
    const token = window.localStorage.getItem('token')
    try{
      const res = await axios.delete(`${baseUrl}/trips/${id}`, headers(token))
      getTrips()
    }
    catch(err){
      console.log('erro ao excluir resposta', err)
    }
  }

  const tripsRendered = ()=>{
    return trips.map((trip)=>{
      return <CardTrip trip={trip} del={true} deleteTrip={deleteTrip}/>
    })
  }
  return(
    <Container>
      <Header />
      <Cards>
        {tripsRendered()}
      </Cards>
    </Container>
  )
}