import styled from 'styled-components'
import React from 'react'
import {useInput} from '../hooks/useInput'
import axios from 'axios'
import { baseUrl } from '../parameters'
import { useHistory } from 'react-router'
import { ButtonStyled, LogoStyled } from '../styledComponents'
import labex from '../assets/labex.png'
import { Link } from 'react-router-dom'
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DivInputs = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  >input{
    padding: 20px;
    margin-bottom: 10px;
  }  
`
const Button = styled(ButtonStyled)`
  border-radius: 5px;
  box-shadow: 0px 0px 3px black;
`

export default function(){
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()
  const history = useHistory()

  const login = async()=>{
    const body={
      email,
      password
    }
    console.log(body)
    try{
      const res = await axios.post(`${baseUrl}/login`,body)
      window.localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    }
    catch(err){
      alert(err.response.data.message)
      setEmail()
      setPassword()
    }
  }
  
  return(
    <Container>
      <LogoStyled>
        <Link to='/'><img src={labex} /></Link>
      </LogoStyled>
      <DivInputs>
        <input value={email} placeholder='Email' onChange={setEmail} />
        <input value={password} placeholder='Password' onChange={setPassword} type='password' />
        <Button onClick={login}>Login</Button>
      </DivInputs>
    </Container>
  )
}