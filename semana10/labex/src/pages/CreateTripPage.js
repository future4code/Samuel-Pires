import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Container from '../components/Container'
import useProtectedPage from '../hooks/useProtectedPage'
import { useInput } from '../hooks/useInput'
import axios from 'axios'
import { baseUrl, headers } from '../parameters'

const InputA = styled.input``
const InputB = styled.input`` 
const Planet = styled.select``
const Text = styled.textarea``
const Button = styled.button``

export default function CreateTripPage(){
  useProtectedPage()

  const[name, setName] = useInput()
  const[planet, setPlanet] = useInput()
  const[date, setDate] = useInput()
  const[description, setDescription] = useInput()
  const[durationInDays, setDurationInDays] = useInput()

  const createTrip = async()=>{
    const token = window.localStorage.getItem('token')
    const body={
      name, planet, date, description, durationInDays
    }
    try{
      await axios.post(`${baseUrl}/trips`, body, headers(token))
      console.log('sucesso ao criar viagem')
    }
    catch(err){
      console.log('erro ao criar viagem', err)
    }
  }

  return(
    <Container>
      {/* <Header>

      </Header>
      <div>
        <InputA placeholder='Nome...'/>
        <InputB placeholder='Data...' type='date' />
        <InputB placeholder='Duração em dias...' type='number' />
        <Planet>
          <option></option>
        </Planet>
        <Text />
        <Button>Criar</Button>
      </div> */}
      <p>CreateTripPage</p>
    </Container>
  )
}