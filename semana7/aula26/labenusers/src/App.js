import React from "react";
// import styled from 'styled-components'
import axios from 'axios'
import Tela1 from './components/Tela1'


class App extends React.Component{
  state = {
    inputNome : '',
    inputEmail : '',
    listaUsuarios : [],
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

  render(){

    return <div>
      <Tela1
        onChangeEmail={this.onChangeEmail}
        onChangeNome={this.onChangeNome}
        onClickCadastrar={this.onClickCadastrar}
        inputNome={this.state.inputNome}
        inputEmail={this.state.inputEmail}
      />
      <button onClick={this.onClickCadastrar}>Clica aqui</button>
    </div>

  }
}

export default App;
