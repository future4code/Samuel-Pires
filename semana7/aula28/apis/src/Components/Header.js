import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  padding-bottom: 10px;
  border-bottom: 1px solid black;

  &>h1{
    margin-left: 20px;
  }
`

const Conteudo = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;

  &>p{
    font-weight: bold;
    border: 1px solid black;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
  &>p:hover{
    background-color: #ddd;
  }
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
        <h1>Star Wars</h1>
        {renderiza}
      </Container>
    )
  }
}