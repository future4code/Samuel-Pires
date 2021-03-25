import React from "react";
import Films from "./Components/Films";
import Header from "./Components/Header";
import Vehicles from "./Components/Vehicles";



export default class App extends React.Component{

  state={
    tela : 'Vehicles'
  }


  renderizar = ()=>{
    switch(this.state.tela){
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
        <Header />
        {this.renderizar()}
      </div>
    )
  }
}