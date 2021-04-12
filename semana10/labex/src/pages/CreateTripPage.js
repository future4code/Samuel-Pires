import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Container from '../components/Container'

const InputA = styled.input``
const InputB = styled.input`` 
const Planet = styled.select``
const Text = styled.textarea``
const Button = styled.button``

export default function CreateTripPage(){
  return(
    <Container>
      <Header>

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
      </div>
    </Container>
  )
}