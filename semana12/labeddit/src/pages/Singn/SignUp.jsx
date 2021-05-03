import React, {useState} from 'react'
import {postApi} from "../../hooks/useRequest";
import useForm from "../../hooks/useForm";
import {useHistory} from 'react-router-dom'
import {
  MaterialInput,
  MaterialAlertTitle,
  MaterialAlert,
  MaterialLock
} from "./styledMaterial";
import {
  MyButton,
  DivLock,
  Form,
  Title,
  Container
} from "./styled";
import {validateEmail} from "./functions";


const initialForm = {
  email:'', password:'', username:''
}
export default function SignUp(){
  const [form, setForm, clearForm] = useForm(initialForm)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const history = useHistory()

  const signUp = (e)=>{
    e.preventDefault()
    if(!validateEmail(form.email)){
      setErrorMessage('Por favor, preencha um e-mail válido')
      setErrorEmail(true)
      clearForm({
        email:'', password:'', username:form.username
      })
    }
    else{
      postApi('/signup', form, null, (res)=>{
        window.localStorage.setItem('token', res.data.token)
        history.push('/')
      },(err)=>{
        window.alert(err.response.data.message)
      })
    }
  }

  return(
    <Container>
      <DivLock>
        <MaterialLock />
      </DivLock>
      <Title>Sign Up</Title>
      <Form onSubmit={signUp} >
        {errorMessage &&
        <MaterialAlert severity={'error'}>
          <MaterialAlertTitle>Erro</MaterialAlertTitle>
          <strong>{errorMessage}</strong>
        </MaterialAlert>
        }
        <MaterialInput
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          name={'username'}
          value={form.username}
          onChange={setForm}
          minLength={'4'}
        />
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
        />
        <MyButton>SIGN UP</MyButton>
      </Form>
    </Container>
  )
}