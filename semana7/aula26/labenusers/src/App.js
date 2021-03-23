import React from "react";
// import styled from 'styled-components'
import axios from 'axios'
import Tela1 from './components/Tela1'
import Tela2 from './components/Tela2'

class App extends React.Component{
  state = {
    inputNome : '',
    inputEmail : '',
    tela : 1,
    listaUsuarios : [],
  }

  objeto = {
    sucesso : true
  }

  onClickCadastrar = ()=>{

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
        headers:{
          Authorization : 'samuel-mateus-cruz'
        }
    }).then((res)=>{
      alert('Sucesso ao cadastrar')
    }).catch((error)=>{''
      console.log('Erro de cadastro:',error.response.data)
      alert('Erro ao cadastrar, por favor tente novamente mais tarde')
    })

    this.setState({
      inputNome: '',
      inputEmail: ''
    })
  }

  onChangeNome = (event)=>{
    this.setState({
      inputNome: event.target.value
    })
  }

  onChangeEmail = (event)=>{
    this.setState({
      inputEmail: event.target.value
    })
  }

  onClickMudarPagina = ()=>{
    if(this.state.tela===1)this.getAllUsers()
    else this.setState({
      tela: 1
    })
  }

  getAllUsers = ()=>{

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        Authorization : 'samuel-mateus-cruz'
      }
    }).then((res)=>{
      this.setState({
        listaUsuarios : res.data,
        tela: 2
      })
    }).catch((erro)=>{
      console.log('erro ao obter usuarios:',erro.message, '\n', erro.data)
    })
  }

  deleteUser = (id)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers: {
        Authorization : 'samuel-mateus-cruz'
      }
    }).then((res)=>{
      alert('Sucesso ao excluir usuário')
      this.deleteUserState(id)
    }).catch((error)=>{
      console.log('erro ao excluir user:', error.message)
      alert('Erro ao excluir usuário')
    })
  }

  deleteUserState = (id) =>{
    const novaListaUsuarios = this.state.listaUsuarios.filter((item)=>{
      if(item.id === id)return false
      else return false
    })
    this.setState({
      listaUsuarios : novaListaUsuarios
    })
  }

  onClickDeletarItem = (id) =>{
    this.deleteUser(id)
  }

  render(){
    console.log("listaUsuarios: ", this.state.listaUsuarios)


    let telaRenderizada
    let textoBotao
    switch (this.state.tela) {
      case 1:
          telaRenderizada = <Tela1
          onChangeEmail={this.onChangeEmail}
          onChangeNome={this.onChangeNome}
          onClickCadastrar={this.onClickCadastrar}
          inputNome={this.state.inputNome}
          inputEmail={this.state.inputEmail}
        />
        textoBotao = 'Ir para lista'
        break;
      case 2:
          telaRenderizada = <Tela2 
            listaUsuarios = {this.state.listaUsuarios}
            onClickDeletarItem = {this.onClickDeletarItem}
          />
        textoBotao = 'Ir para cadastro'
        break;
      default:
        break;
    }

    return <div>
      <button onClick={this.onClickMudarPagina}>{textoBotao}</button>
      {telaRenderizada}
    </div>

  }
}

export default App;
