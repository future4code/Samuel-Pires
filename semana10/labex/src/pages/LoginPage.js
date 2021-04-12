import styled from 'styled-components'
import Logo from '../components/Logo'
import React from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DivInputs = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  button{
    border: 1px solid black;
    border-radius: 20px;
  }
`

export default function(){
  return(
    <Container>
      <Logo>
        {/* aqui logo */}
      </Logo>
      <DivInputs>
        <input placeholder='Email' />
        <input placeholder='Senha' type='password' />
      </DivInputs>
    </Container>
  )
}