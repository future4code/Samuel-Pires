import React from "react";
import Films from "./Components/Films";
import Header from "./Components/Header";
import Vehicles from "./Components/Vehicles";



export default class App extends React.Component{

  state={
    screen : 'Films'
  }

  //Função para o header, mudar qual tela é exibida
  onClickChangeScreen = (screenName)=>{
    this.setState({
      screen: screenName
    })
  }


  renderizar = ()=>{
    switch(this.state.screen){
      case 'Films':
        return <Films />
      case 'Vehicles':
        return <Vehicles />
      case 'Planets':
        return <div></div>
    }
  }

  render(){
    return(
      <div>
        <Header onClickChangeScreen={this.onClickChangeScreen}/>
        {this.renderizar()}
      </div>
    )
  }
}