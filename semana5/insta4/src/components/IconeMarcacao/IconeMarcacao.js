import React, {Component} from 'react'
import './IconeMarcacao.css'
import icone from '../../img/salvar.png'
import iconePreto from '../../img/salvar-preto.png'

export class IconeMarcacao extends Component {
  state = {
    salvo : false
  } 

  onClickSalvar = ()=>{
    this.setState({
      salvo : !this.state.salvo
    })
  }

  render(){
    let iconeSalvar
    if(this.state.salvo){
      iconeSalvar = iconePreto
    }
    else{
      iconeSalvar = icone
    }

    return <div className={'salvar-container'}>
      <img src={iconeSalvar} onClick={this.onClickSalvar}/>
    </div>
  }

}