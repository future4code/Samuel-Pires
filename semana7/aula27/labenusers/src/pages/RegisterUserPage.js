import axios from 'axios'
import React from 'react'
import {baseUrl, axiosConfig} from '../parameters'

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
    return <div>
      <input placeholder='Nome' value={this.state.inputName} onChange={this.onChangeInputName} />
      <input placeholder='Email' value={this.state.inputEmail} onChange={this.onChangeInputEmail} />
      <button onClick={this.onClickRegisterUser}>Registrar</button>
    </div>
  }
}