import styled from 'styled-components'
import React from 'react'
import labex from '../assets/labex.png'
import {ButtonStyled, ContainerStyled, LogoStyled} from '../components/styledComponents'
import {Link} from 'react-router-dom'

const Container = styled(ContainerStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Buttons = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Button = styled(ButtonStyled)`
  width: 300px;
  height: 100px;
  color: white;
  font-size: 30px;
`

export default function(){
  return(
    <Container>
      <LogoStyled>
        <img src={labex} />
      </LogoStyled>
      <Buttons>
        <Link to='/trips/list'><Button>Viagens</Button></Link>
        <Link to='/login'><Button>Admin</Button></Link>
      </Buttons>
    </Container>
  )
}