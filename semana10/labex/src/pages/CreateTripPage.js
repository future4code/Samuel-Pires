import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
const Container= styled.div`
  width: 100%;
  height: 100%;
  div{
    width: min(900px, 90%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

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