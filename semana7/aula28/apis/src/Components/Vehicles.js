import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  width: 250px;
  height: 300px;
  background-color: blue;
`

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class Vehicles extends React.Component{

  render(){
    return (
    <Container>
      <Conteudo>
        <h2>{this.props.name}</h2>
        <h3>{this.props.model}</h3>
        <h5>{this.props.manufacturer}</h5>
        <p>{this.props.films}</p>
      </Conteudo>
    </Container>
    )
  }
}