import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { axiosConfig, baseUrl } from '../parameters'

const Container = styled.div`
  text-align:center;
`

export default class DetailsUserPage extends React.Component{
  state={
    inputName: '',
    inputEmail: '',
    editable : 'disable',
    textButton : 'Editar'
  }

  //------------------------------------------
  componentDidMount(){
    this.getUserById()
  }


  //------------------------ Funções interação com usuário
  onClickEditar = ()=>{
    if(this.state.editable==='disable'){
      this.setState({
        editable: '',
        textButton: 'Salvar'
      })
    }
    else{
      this.editUser()
      this.setState({
        editable: 'disable',
        textButton: 'Editar'
      })
    }
  }

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

  //---------------------------- Funções para api
  editUser = async ()=>{
    const body = {
      name : this.state.inputName,
      email : this.state.inputEmail
    }
    try{
      const response = await axios.put(`${baseUrl}/${this.props.id}`,body, axiosConfig)
    }catch(error){
      alert('Erro ao editar usuário, por favor tente novamente mais tarde.')
    }
  }

  getUserById = async ()=>{
    try{
      const response = await axios.get(`${baseUrl}/${this.props.id}`, axiosConfig)
      this.setState({
        inputName: response.data.name,
        inputEmail: response.data.email
      })
    }catch(error){
      console.log('não conseguir pegar o usuario pelo id', error)
    }
  }

  render(){

    return <Container>
      <h2>Detalhes do usuário</h2>
      <input placeholder='Nome'  value={this.state.inputName}  disabled={this.state.editable} onChange={this.onChangeInputName}/>
      <input placeholder='Email' value={this.state.inputEmail} disabled={this.state.editable} onChange={this.onChangeInputEmail}/>
      <button onClick={this.onClickEditar}>{this.state.textButton}</button>

    </Container>
  }
}