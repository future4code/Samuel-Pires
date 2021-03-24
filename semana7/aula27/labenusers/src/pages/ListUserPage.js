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

export default class ListUserPage extends React.Component{
  state={
    listaUsers : []
  }

  //----------------------- 
  componentDidMount(){
    this.getAllUsers();
  }

  //----------------------- Funções de interação com usuário
  onClickDeleteUser = (id)=>{
    if(window.confirm('Tem certeza que deseja excluir?'))this.deleteUser(id)
  }


  
  //----------------------- Funções internas
  deleteUserState = (id)=>{
    const newListUsers = this.state.listaUsers.filter((user)=>{
      if(user.id===id)return false
      else return true
    })
    this.setState({
      listaUsers : newListUsers
    })
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



  //--------------------------------------------------------------------------
  render(){
    const renderizar = this.state.listaUsers.map((user)=>{
      return <Container key={user.id}>
        <p onClick={()=>this.props.alternateUserEdit(user.id)}>{user.name}</p>
        <button onClick={()=>this.onClickDeleteUser(user.id)}>x</button>
      </Container>
    })
    return <div>
      {renderizar}
    </div>
  }
}