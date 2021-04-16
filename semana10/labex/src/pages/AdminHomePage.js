import styled from "styled-components";
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {ContainerStyled} from '../components/styledComponents'
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import { baseUrl, headers } from "../assets/parameters";
import { useParams } from "react-router-dom";
import CardTrip from "../components/CardTrip";
import { delApi } from "../hooks/useRequest";

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

  const deleteTrip = (id)=>{
    const token = window.localStorage.getItem('token')
    delApi(`/trips/${id}`, headers(token), '','', (res)=>{getTrips()})
  }

  const tripsRendered = ()=>{
    return trips.map((trip)=>{
      return <CardTrip trip={trip} del={true} deleteTrip={deleteTrip}/>
    })
  }
  return(
    <ContainerStyled>
      <Header />
      <Cards>
        {tripsRendered()}
      </Cards>
    </ContainerStyled>
  )
}