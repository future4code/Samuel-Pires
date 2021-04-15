import React, { useState } from 'react'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput'

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`
const Busca = styled.input`
  width: max(300px, 80%);
  height: 100%;
`
// const Data = styled.input`
//   width: max(150px, 11%);
//   height: 50px;
// `
// const Duration = styled.input`
//   width: max(80px, 10%);
// `

// const DivData = styled.div`
//   display: flex;
//   align-items: center;
//   label{
//     margin-right: 5px;
//   }
// `
export default function Filter(props){
  const [busca, setBusca] = useInput(order)
  const [trips, setTrips] = useState(props.trips)
  const [tripsFiltered, setTripsFiltered] = useState(props.trips)

  function order(){
    const newTrips = trips.filter((trip)=>{
      let {name,date,planet,durationInDays,description} = trip
      name = name.toLowerCase()
      planet = planet.toLowerCase()
      description = description.toLowerCase()
      const newBusca = busca.toLowerCase()

      if((name.includes(newBusca) || planet.includes(newBusca) || name.includes(newBusca)))
        return true
    })
    
    props.tripsFiltered(newTrips)
  }

  return(
    <Container>
      <Busca placeholder='Buscar por nome, descrição ou planeta...' value={busca} onChange={setBusca}/>
    </Container>
  )
}