import React from 'react'
import styled from 'styled-components'

const Componente = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &>label, >select, >button{
      margin: 10px;
    }
`

export default class EtapaUm extends React.Component{
  render(){
    return <Componente>
      <label>1.Qual o seu nome?</label>
      <input />
      <label>2. Qual a sua idade?</label>
      <input />
      <label>3. Qual seu email?</label>
      <input />
      <label>4. Qual a sua escolaridade?</label>
      <select onChange={this.props.onChangeEscolaridade}>
        <option value="medio-incompleto">Ensino médio incompleto</option>
        <option value="medio-completo">Ensino médio completo</option>
        <option value="superior-incompleto">Ensino superior incompleto</option>
        <option value="superior-completo">Ensino superior completo</option>
      </select>
      <button onClick={this.props.onClickProxima}>Próxima etapa</button>
    </Componente>
  }
}