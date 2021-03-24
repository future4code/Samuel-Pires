import React from "react";
import styled from 'styled-components'

const Componente = styled.div`
  
`

export default class Tela1 extends React.Component{
    render(){
        return <Componente>
            <input placeholder='Nome' onChange={this.props.onChangeNome} value={this.props.inputNome} />
            <input placeholder='Email' onChange={this.props.onChangeEmail} value={this.props.inputEmail} />
            <button onClick={this.props.onClickCadastrar}>Cadastrar</button>
        </Componente>
    }
}