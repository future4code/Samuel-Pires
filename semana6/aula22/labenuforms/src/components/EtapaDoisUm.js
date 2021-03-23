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

export default class EtapaDoisUm extends React.Component{
 render(){
   return <Componente>
     <label>5. Qual o curso?</label>
     <input />
     <label>6. Qual a unidade de ensino?</label>
     <input />
     <button onClick={this.props.onClickProxima}>Próxima etapa</button>
   </Componente>
 }
}