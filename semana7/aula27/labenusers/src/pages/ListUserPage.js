import axios from 'axios'
import React from 'react'
import { axiosConfig, baseUrl } from '../parameters'

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
      return <div key={user.id}>
        <p>{user.name}</p>
        <button onClick={()=>this.onClickDeleteUser(user.id)}>x</button>
      </div>
    })
    return <div>
      {renderizar}
    </div>
  }
}