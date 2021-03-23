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

export default class EtapaDoisDois extends React.Component{
 render(){
   return <Componente>
     <label>Por que você não terminou um curso de graduação?</label>
     <input />
     <label>Você fez algum curso complementar?</label>
     <select defaultValue="nao-curso">
       <option value="curso-tecnico">Curso técnico</option>
       <option value="curso-ingles">Curso de inglês</option>
       <option value="nao-curso">Não fiz curso complementar</option>
     </select>
     <button onClick={this.props.onClickProxima}>Próxima etapa</button>
   </Componente>
 }
}