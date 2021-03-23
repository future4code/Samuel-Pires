import React from 'react'
import styled from 'styled-components'
import EtapaUm from './components/EtapaUm'
import EtapaDoisUm from './components/EtapaDoisUm'
import EtapaDoisDois from './components/EtapaDoisDois'
import EtapaTres from './components/EtapaTres'

export default class App extends React.Component{

  state = {
    // nome : "",
    // idade : "",
    // email : "",
    // escolaridade : "",
    cursoSuperior : false,
   
    // unidadeEnsino : "",
    // explicacaoGraduacao: "",
    // cursoComplementar: "",
    etapa: 1,
    // pessoas : []
  }

  onClickProxima = ()=>{
    this.setState({
      etapa: this.state.etapa+1
    })
  }

  onChangeEscolaridade = (event)=>{
    switch(event.target.value){
      case "superior-incompleto":
      case "superior-completo":
        this.setState({
          cursoSuperior: true
        })
      break
      default:
        this.setState({
          cursoSuperior: false
        })
      break
    }
  }

  render(){
    const renderizaEtapa = ()=>{
      if(this.state.etapa===1)return <EtapaUm 
        onClickProxima={this.onClickProxima}
        onChangeEscolaridade={this.onChangeEscolaridade}
      />
      else if(this.state.etapa===2){
        if(this.state.cursoSuperior)return <EtapaDoisUm 
          onClickProxima={this.onClickProxima}
        />
        else return <EtapaDoisDois 
          onClickProxima={this.onClickProxima}
        />
      }
      else if(this.state.etapa===3){
        return <EtapaTres />
      }
    }

    const etapa = renderizaEtapa()


    return <div>
      {etapa}
    </div>
  }
}