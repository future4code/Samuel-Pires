import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;

`

const Conteudo = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default class Header extends React.Component{

  

  render(){
    const renderiza = <Conteudo>
      <p onClick={()=>this.props.onClickChangeScreen('Films')}>Films</p>
      <p onClick={()=>this.props.onClickChangeScreen('Vehicles')}>Vehicles</p>
      <p onClick={()=>this.props.onClickChangeScreen('Planets')}>Planets</p>
    </Conteudo>
 
    return(
      <Container>
        {renderiza}
      </Container>
    )
  }
}