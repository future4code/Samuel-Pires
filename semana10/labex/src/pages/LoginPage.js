import styled from 'styled-components'
import React from 'react'
import {useInput} from '../hooks/useInput'
import axios from 'axios'
import { baseUrl } from '../assets/parameters'
import { useHistory } from 'react-router'
import { ButtonStyled, LogoStyled } from '../components/styledComponents'
import labex from '../img/labex.png'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input{
    padding: 20px;
    margin-bottom: 10px;
  }
`


const initialForm = {
  email: '', password:''
}

export default function(){
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()
  const [form, setForm] = useForm(initialForm)
  const history = useHistory()

  const login = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.post(`${baseUrl}/login`,form)
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
      {/* <DivInputs>
        <input value={email} placeholder='Email' onChange={setEmail} />
        <input value={password} placeholder='Password' onChange={setPassword} type='password' />
        <Button onClick={login}>Login</Button>
      </DivInputs> */}
      <Form onSubmit={login}>
        <input required name='email' value={form.email} onChange={setForm} placeholder='Email'
          pattern='/^[a-z0-9.]+@[a-z0-9]+\.[a-z]\' title='Tipo e-mail necessário x@x.x'
        />
        <input required name='password' value={form.password} onChange={setForm} placeholder='Senha'
          type='password'
        />
        <Button>Login</Button>
      </Form>
    </Container>
  )
}