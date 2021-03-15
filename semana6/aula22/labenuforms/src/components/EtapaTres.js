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

export default class EtapaTres extends React.Component{
 render(){
   return <Componente>
     <h2>O FORMULÁRIO ACABOU</h2>
     <p>Muito obrigado por participar! Entraremos em contato!</p>
   </Componente>
 }
}