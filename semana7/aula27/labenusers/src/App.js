import React from 'react'
import ListUserPage from './pages/ListUserPage'
import RegisterUserPage from './pages/RegisterUserPage'

export default class App extends React.Component {
  state = {
    currentPage : 2
  }

  //----------------------- Funções de interação com usuário
  alternateCurrentPage(pageNumber){
    this.setState({
      currentPage: pageNumber
    })
  }


  renderPage = ()=>{
    switch(this.state.currentPage){
      case 1:
        return <div>
          <button onClick={()=>this.alternateCurrentPage(2)}>Ir para lista de usuários</button>
          <RegisterUserPage />
        </div>
      case 2:
        return <div>
          <button onClick={()=>this.alternateCurrentPage(1)}>Voltar para registrar usuários</button>
          <ListUserPage 
            alternateCurrentPage = {this.alternateCurrentPage}
          />
        </div>
      default:
        return <div></div>
    }
  }

  render(){
    
    return <div>
      
      {this.renderPage()}
    </div>
  }

}