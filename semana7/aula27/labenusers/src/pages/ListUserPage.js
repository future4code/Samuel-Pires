import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { axiosConfig, baseUrl } from '../parameters'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* &>button{
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`

const ContainerPrincipal = styled.div`
  text-align:center;
`

const Busca = styled.div`
  display: flex;
`

export default class ListUserPage extends React.Component{
  state={
    listaUsers : [],
    listaUsersFiltrada : [],
    inputName: '',
    currentRender: 'listaUsers'
  }

  //----------------------- 
  componentDidMount(){
    this.getAllUsers();
  }

  //----------------------- Funções de interação com usuário
  onClickDeleteUser = (id)=>{
    if(window.confirm('Tem certeza que deseja excluir?'))this.deleteUser(id)
  }

  onChangeInputName = (e)=>{
    this.setState({
      inputName : e.target.value
    })
  }

  onClickBuscar = ()=>{
      this.searchUsers()
      this.setState({
        currentRender: 'listaUsersFiltrada',
        inputName: ''
      })
  }

  onClickFecharBusca = ()=>{
      this.setState({
        currentRender: 'listaUsers'
      })
  }

  //----------------------- Funções internas
  deleteUserState = (id)=>{
    const newListUsers = this.state.listaUsers.filter((user)=>{
      if(user.id===id)return false
      else return true
    })
    if(this.state.currentRender==='listaUsers'){
      this.setState({
        listaUsers : newListUsers
      })
    }
    else if(this.state.currentRender==='listaUsersFiltrada'){
      const newListUsersFiltrada = this.state.listaUsersFiltrada.filter((user)=>{
        if(user.id===id)return false
        else return true
      })
      this.setState({
        listaUsers: newListUsers,
        listaUsersFiltrada: newListUsersFiltrada
      })
    }
  }

  //----------------------- Funções para api
  getAllUsers = async ()=>{
    try{
      const response = await axios.get(baseUrl, axiosConfig)
      this.setState({
        listaUsers: response.data
      })
    }
    catch(error){
      console.log('erro ao obter usuários', error)
    }
  }

  deleteUser = async (id)=>{
    try{
      const response = await axios.delete(`${baseUrl}/${id}`, axiosConfig)
      this.deleteUserState(id)
    }catch(error){
      console.log('erro ao excluir usuários', error)
      alert('Erro ao excluir o usuário, por favor tente novamente mais tarde.')
    }
  }

  searchUsers = async ()=>{
    try{
      const response = await axios.get(`${baseUrl}/search?name=${this.state.inputName}&email=`, axiosConfig)
      console.log('sucesso ao buscar', response.data)
      this.setState({
        listaUsersFiltrada: response.data
      })
    }
    catch(error){
      console.log('erro ao buscar pelo nome', error)
    }
  }

  //--------------------------------------------------------------------------

  renderizar = ()=>{
    if(this.state.currentRender==='listaUsers'){
      const obj = this.state.listaUsers.map((user)=>{
        return <Container key={user.id}>
          <p onClick={()=>this.props.alternateUserEdit(user.id)}>{user.name}</p>
          <button onClick={()=>this.onClickDeleteUser(user.id)}>x</button>
        </Container>
      })
      return obj;
    }
    else if(this.state.currentRender==='listaUsersFiltrada'){
      const obj = this.state.listaUsersFiltrada.map((user)=>{
        return <Container key={user.id}>
          <p onClick={()=>this.props.alternateUserEdit(user.id)}>{user.name}</p>
          <button onClick={()=>this.onClickDeleteUser(user.id)}>x</button>
        </Container>
      })
      return obj;
    }
  }

  //--------------------------------------------------------------------------
  render(){
    const renderizar = this.renderizar()
    return <ContainerPrincipal>
      <h2>Lista de usuários</h2>
      <Busca>
        <input placeholder='Buscar por nome...' value={this.state.inputName} onChange={this.onChangeInputName}/>
        <button onClick={this.onClickBuscar}>Buscar</button>
        <button onClick={this.onClickFecharBusca}>X</button>
      </Busca>
      {renderizar}
    </ContainerPrincipal>
  }
}