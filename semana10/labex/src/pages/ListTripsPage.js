import React from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import CardTrip from '../components/CardTrip'
import styled from 'styled-components'
import {ContainerStyled} from '../components/styledComponents'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'
import { baseUrl } from '../assets/parameters'
import { useGetApi } from '../hooks/useRequest'

const Container = styled(ContainerStyled)`
  >div{
    align-self: center;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
  }
  overflow: auto;
`

const Cards = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
`

export default function ListTripsPage(){
  const[trips, setTrips] = useState([])
  const [tripsFiltered, setTripsFiltered] = useState([])
  const [getApi, setGetApi] = useGetApi('Erro ao obter viagens')
  // const getTrips = async()=>{
  //   try{
  //     const res = await axios.get(`${baseUrl}/trips`)
  //     setTrips(res.data.trips)
  //     setTripsFiltered(res.data.trips)
  //   }
  //   catch(err){
  //     console.log('erro ao obter viagens getTrips', err)
  //   }
  // }

  const getTrips=()=>{
    setGetApi('/trips')
  }

  useEffect(()=>{
    getTrips()
  },[])

  useEffect(()=>{
    if(getApi && getApi.data && getApi.data.trips){
      setTrips(getApi.data.trips)
      setTripsFiltered(getApi.data.trips)
    }
  },[getApi])

  const tripsRendered = ()=>{
    return tripsFiltered.map((trip)=>{
      return <CardTrip trip={trip}/>
    })
  }

  return(
    <Container>
      <Header />
      <div>
        <Filter trips={trips} setTripsFiltered={setTripsFiltered}/>
        <Cards>
          {tripsRendered()}
        </Cards>
      </div>
    </Container>
  )
}