import React from "react";
import styled from 'styled-components'

const Componente = styled.ul`
  
`

export default class Tela2 extends React.Component{
    render(){
        let listaNomes = this.props.listaUsuarios.map((item)=>{
						console.log('item:', item)
            return <li key={item.id}>{item.name}</li>
        })
        return <Componente>
          {listaNomes}
        </Componente>
    }
}