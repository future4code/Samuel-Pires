import styled from 'styled-components'
import React from 'react'
import {useInput} from '../hooks/useInput'
import axios from 'axios'
import { baseUrl } from '../parameters'
import { useHistory } from 'react-router'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      console.log('erro ao tentar fazer login', err)
      setEmail()
      setPassword()
    }
  }

  return(
    <Container>
      {/* <Logo>
      </Logo>
      <DivInputs>
        <input placeholder='Email' />
        <input placeholder='Senha' type='password' />
      </DivInputs> */}
      <p>LoginPage</p>
      <input value={email} placeholder='Email' onChange={setEmail} />
      <input value={password} placeholder='Password' onChange={setPassword} type='password' />
      <button onClick={login}>Login</button>
    </Container>
  )
}