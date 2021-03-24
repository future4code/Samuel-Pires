import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import {baseUrl, axiosConfig} from '../parameters'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  text-align: center;
  &>input{
    margin-bottom: 5px;
  }
`

export default class RegisterUserPage extends React.Component{
  state={
    inputName : '',
    inputEmail: '',
  }

  // ---------------------------- Funções disparadas pelo usuário
  onChangeInputName = (e)=>{
    this.setState({
      inputName : e.target.value
    })
  }

  onChangeInputEmail = (e)=>{
    this.setState({
      inputEmail : e.target.value
    })
  }

  onClickRegisterUser = ()=>{
    this.createUser()
  }

  // --------------------------- Funções para api
  
  createUser = async ()=>{
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    }

    try{
      const response = await axios.post(baseUrl,body, axiosConfig)
      this.setState({
        inputName: '',
        inputEmail: ''
      })
      alert('Usuário registrado com sucesso.')
    }
    catch(error){
      alert('Erro ao registrar usuário, por favor tente novamente mais tarde.')
      console.log('erro', error)
    }
  }

  render(){
    return <Container>
      <h2>Registar usuário</h2>
      <input placeholder='Nome' value={this.state.inputName} onChange={this.onChangeInputName} />
      <input placeholder='Email' value={this.state.inputEmail} onChange={this.onChangeInputEmail} />
      <button onClick={this.onClickRegisterUser}>Registrar</button>
    </Container>
  }
}