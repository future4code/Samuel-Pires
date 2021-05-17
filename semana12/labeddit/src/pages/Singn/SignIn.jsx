import React, {useState} from 'react'
import useForm from "../../hooks/useForm"
import {validateEmail} from "./functions";
import {postApi} from '../../hooks/useRequest'
import {useHistory} from 'react-router-dom'
import validateLogin from "../validateLogin";
import {
  Container,
  Form,
  Title,
  DivLock,
  MyButton, MyButtonOutline
} from "./styled";
import {
  MaterialInput,
  MaterialAlertTitle,
  MaterialAlert, MaterialLock
} from "./styledMaterial";

const initialForm = {
  email:'', password:''
}
export default function SignIn() {
  const [form, setForm, clearForm] = useForm(initialForm)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const history = useHistory()

  const valLogin = ()=>{
    if(validateLogin()){
      history.push('/')
    }
  }
  valLogin()

  const login=(e)=>{
    e.preventDefault()
    const validate = validateEmail(form.email)
    if(!validate){
      setErrorMessage('Por favor, preencha um e-mail válido')
      setErrorEmail(true)
      clearForm()
    }
    else{
      postApi('/login',form, null, (res)=>{
        window.localStorage.setItem('token', res.data.token)
        history.push('/')
      },(err)=>{
        setErrorMessage(err.response.data.message)
        if(err.response.data.message==='Senha incorreta'){
          setErrorPass(true)
          setErrorEmail(false)
          const e = {
            target:{
              name:'password',
              value:''
            }
          }
          setForm(e)
        }
        else if(err.response.data.message==='Usuário não encontrado'){
          setErrorEmail(true)
          setErrorPass(false)
          clearForm()
        }
        else{
          clearForm()
        }
      })
    }
  }

  return (
    <Container>
      <DivLock>
        <MaterialLock />
      </DivLock>
      <Title>Sign In</Title>
      <Form onSubmit={login} >
        {errorMessage &&
          <MaterialAlert severity={'error'}>
            <MaterialAlertTitle>Erro</MaterialAlertTitle>
            <strong>{errorMessage}</strong>
          </MaterialAlert>
        }
        <MaterialInput
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          name={'email'}
          value={form.email}
          onChange={setForm}
          error={errorEmail}
        />
        <MaterialInput
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          type={'password'}
          required
          name={'password'}
          value={form.password}
          onChange={setForm}
          error={errorPass}
        />
        <MyButton>SIGN IN</MyButton>
      </Form>
      <MyButtonOutline onClick={()=>history.push('signup')}>SIGN UP</MyButtonOutline>
    </Container>
  );
}