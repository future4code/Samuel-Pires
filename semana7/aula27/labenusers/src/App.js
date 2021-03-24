import React from 'react'
import DetailsUserPage from './pages/DetailsUserPage'
import ListUserPage from './pages/ListUserPage'
import RegisterUserPage from './pages/RegisterUserPage'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &>button{
    margin-bottom: 10px;
  }
`

export default class App extends React.Component {
  state = {
    currentPage : 1,
    idUserEdit : '',
  }

  //----------------------- Funções de interação com usuário
  alternateCurrentPage = (pageNumber)=>{
    this.setState({
      currentPage: pageNumber
    })
  }

  alternateUserEdit = (id)=>{
    this.setState({
      idUserEdit : id
    })
    this.alternateCurrentPage(3)
  }

  renderPage = ()=>{
    switch(this.state.currentPage){
      case 1:
        return <ContainerPages>
          <button onClick={()=>this.alternateCurrentPage(2)}>Ir para lista de usuários</button>
          <RegisterUserPage />
        </ContainerPages>
      case 2:
        return <ContainerPages>
          <button onClick={()=>this.alternateCurrentPage(1)}>Voltar para registrar usuários</button>
          <ListUserPage 
            alternateUserEdit = {this.alternateUserEdit}
          />
        </ContainerPages>
      case 3:
        return <ContainerPages>
          <button onClick={()=>this.alternateCurrentPage(2)}>Voltar</button>
          <DetailsUserPage 
            id = {this.state.idUserEdit}
          />
        </ContainerPages>
      default:
        return <div></div>
    }
  }

  render(){
    
    return <Container>
      
      {this.renderPage()}
    </Container>
  }

}