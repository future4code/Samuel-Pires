import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import {ContainerStyled} from '../styledComponents'
const Trip = styled.select``
const DivInputs = styled.div``
const InputA = styled.input``
const InputB = styled.input``
const Country = styled.select``
const Text = styled.textarea``

export default function ApplicationFormPage(){
  return(
    <ContainerStyled>
      {/* <Header />
      <div>
        <Trip>
          <option></option>
        </Trip>
        <DivInputs>
          <InputA placeholder='Nome...'/>
          <InputB placeholder='Idade...' type='number' />
        </DivInputs>
        <DivInputs>
          <InputA placeholder='Profissão...'/>
          <Country>
            <option></option>
          </Country>
        </DivInputs>
        <Text />
      </div> */}
      <p>ApplicationFormPage</p>
    </ContainerStyled>
  )
}